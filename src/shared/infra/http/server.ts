import 'reflect-metadata';
import '@config/env';

import registerProviders from '@shared/providers';

import App from './app';

const PORT: number = Number(process.env.PORT) || 3333;

registerProviders().then(() => {
  const app = new App();
  app.start(PORT);
});
