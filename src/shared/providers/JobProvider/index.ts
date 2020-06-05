import { container } from 'tsyringe';

import { AgendaJobProvider } from './implementations/AgendaJobProvider';
import { JobProvider } from './interface';

container.registerSingleton<JobProvider>('JobProvider', AgendaJobProvider);
