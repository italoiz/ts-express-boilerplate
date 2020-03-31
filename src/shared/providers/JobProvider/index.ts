import { container } from 'tsyringe';

import { AgendaJobProviderAdapter } from './adapters/AgendaAdapter';
import { JobProviderInterface } from './interface';

container.registerSingleton<JobProviderInterface>(
  'JobProvider',
  AgendaJobProviderAdapter,
);
