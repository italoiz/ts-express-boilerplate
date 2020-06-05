import 'reflect-metadata';
import '@config/env';

import registerProviders from '@shared/providers';

const PORT: number = Number(process.env.PORT) || 3333;

registerProviders().then(async () => {
  const app = (await import('./app')).default;
  app.start(PORT);
});
