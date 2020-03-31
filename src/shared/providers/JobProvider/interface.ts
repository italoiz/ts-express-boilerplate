export interface JobInterface<T> {
  id: number | string;
  data: T;
  cancel: () => Promise<void>;
}

export interface JobHandler<T = any> {
  (job: JobInterface<T>, done?: (err?: Error) => void): void | Promise<void>;
}

export interface JobProviderInterface {
  process<T>(jobName: string, data?: T): Promise<JobInterface<T>>;

  processAt<T = any>(
    jobName: string,
    date: string | Date,
    data?: T,
  ): Promise<JobInterface<T>>;

  start(): Promise<void>;

  getJob<T = any>(job: any): JobInterface<T>;
  getJob<T = any>(job: any, done: Function): JobInterface<T>;

  getJobHandler(job: any, done: any): any;

  createWorker<T = any>(jobName: string, handler: JobHandler<T>): void;
  createWorker<T = any>(
    jobName: string,
    options: any,
    handler: JobHandler<T>,
  ): void;
}
