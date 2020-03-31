import '@config/env';
import '@shared/providers';

import glob from 'glob';
import { container } from 'tsyringe';

import { JobProviderInterface } from '@shared/providers/JobProvider/interface';
import debug from '@utils/debug';

class JobWorker {
  public jobProvider: JobProviderInterface;

  private debugPrefix = 'worker:jobs';

  constructor() {
    this.jobProvider = container.resolve<JobProviderInterface>('JobProvider');
  }

  private debug(message: string, ...args: any[]): void {
    debug(this.debugPrefix, message, ...args);
  }

  private async registerJobs(): Promise<void> {
    const jobsModulePaths = glob.sync('src/modules/**/jobs/*.ts');

    this.debug('Registering jobs');
    this.debug('Found %d job(s) in modules path', jobsModulePaths.length);

    if (!jobsModulePaths.length) return;

    const modules = jobsModulePaths
      .map(path => path.replace('src/modules/', '@modules/'))
      .map(path => ({
        modulePath: path.replace('@modules/', ''),
        module: import(path).then(m => m.default),
      }))
      .map(async ({ module, modulePath }) => {
        const resolveModule = await module;

        if (typeof resolveModule === 'function') {
          debug(
            `${this.debugPrefix}:module`,
            'Module "%s" registered.',
            modulePath,
          );

          return resolveModule(this.jobProvider);
        }

        throw new Error('Job module is not a function.');
      });

    await Promise.all(modules);
  }

  async start(): Promise<void> {
    return this.jobProvider
      .start()
      .then(() => {
        this.debug('⚡️ Jobs worker started successfully');
        this.registerJobs();
      })
      .catch(() => {
        this.debug('🙁 Jobs worker cannot started');
      });
  }
}

export default new JobWorker();
