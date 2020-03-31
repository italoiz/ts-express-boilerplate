import Agenda from 'agenda';

import AgendaConfig from '@config/agenda';

import { JobProviderInterface, JobInterface, JobHandler } from '../interface';

export class AgendaJobProviderAdapter implements JobProviderInterface {
  public readonly agenda: Agenda;

  constructor() {
    this.agenda = new Agenda(AgendaConfig);
  }

  getJob<T = any>(job: Agenda.Job<T>): JobInterface<T> {
    return {
      id: job.attrs._id.toHexString(),
      data: job.attrs.data,
      cancel: job.remove,
    };
  }

  getJobHandler<T = any>(
    jobHandler: JobHandler<T>,
  ): (job: Agenda.Job<T>, done: (err?: Error) => void) => void | Promise<void> {
    const handler = (
      job: Agenda.Job<T>,
      ...args: any[]
    ): void | Promise<void> => {
      return jobHandler(this.getJob(job), ...args);
    };

    return handler;
  }

  async process<T = any>(
    jobName: string,
    data?: T | undefined,
  ): Promise<JobInterface<T>> {
    return this.agenda.now(jobName, data).then(this.getJob.bind(this));
  }

  processAt<T = any>(
    jobName: string,
    date: string | Date,
    data?: T | undefined,
  ): Promise<JobInterface<T>> {
    return this.agenda
      .schedule<T>(date, jobName, data)
      .then(this.getJob.bind(this));
  }

  start(): Promise<void> {
    return this.agenda.start();
  }

  createWorker<T = any>(
    jobName: string,
    options: any,
    handler?: JobHandler<T>,
  ): void {
    const defineOptions = !handler ? {} : options;
    const fn = !handler ? options : handler;

    return this.agenda.define(jobName, defineOptions, this.getJobHandler(fn));
  }
}
