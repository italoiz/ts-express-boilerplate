import { JobProvider } from '@shared/providers/JobProvider/interface';

interface ExampleJobInterface {
  title: string;
  description: string;
}

export default (jobProvider: JobProvider): void | Promise<void> => {
  /**
   * Create a worker with name "task_name", when use methods `process`, `processAt`
   * passing "task_name" on the `jobName` param, this handler will be called.
   */
  jobProvider.createWorker<ExampleJobInterface>('task_name', job => {
    console.log(job.id); // eslint-disable-line
  });
};
