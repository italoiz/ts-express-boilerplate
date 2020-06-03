export interface JobInterface<T> {
  id: number | string;
  data: T;
  cancel: () => Promise<void>;
}

export interface JobHandler<T = any> {
  (job: JobInterface<T>, done?: (err?: Error) => void): void | Promise<void>;
}

export interface JobProviderInterface {
  /**
   * Create a job to run once immediately.
   *
   * @param jobName Job name.
   * @param data Custom data to process job.
   */
  process<T>(jobName: string, data?: T): Promise<JobInterface<T>>;

  /**
   * Create a job to run once in specified `date`.
   *
   * @param jobName Job name.
   * @param date Date to execute the job.
   * @param data Custom data to process job.
   */
  processAt<T = any>(
    jobName: string,
    date: string | Date,
    data?: T,
  ): Promise<JobInterface<T>>;

  /**
   * Starts the job queue processing.
   */
  start(): Promise<void>;

  /**
   * Transform a job from the library for an object like the interface.
   *
   * @param job Job object from library.
   */
  transformJob<T = any>(job: any): JobInterface<T>;

  /**
   * Transform from interface `JobProvider` handler for the library handler.
   *
   * @param job Job object from library.
   * @param done Callback function to pass to library handler.
   */
  getJobHandler(job: any): Function;

  /**
   * Register a worker with a name.
   *
   * @param jobName Name of job worker to pass to the library.
   * @param options Options to configure worker, passed to the library.
   * @param handler Handler to execute job process.
   */
  createWorker<T = any>(jobName: string, handler: JobHandler<T>): void;
  createWorker<T = any>(
    jobName: string,
    options: any,
    handler: JobHandler<T>,
  ): void;
}
