import 'reflect-metadata';
import '@config/env';
import { container } from 'tsyringe';

import registerProviders from '@shared/providers';

import JobQueue from './index';

registerProviders().then(() => {
  const jobQueue = container.resolve(JobQueue);
  jobQueue.start();
});
