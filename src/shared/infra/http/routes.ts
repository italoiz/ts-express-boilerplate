import express from 'express';
import glob from 'glob';

import { AppRoute } from '@shared/interfaces/routes';
import debug from '@utils/debug';

export default async (app: express.Express): Promise<void> => {
  debug('app:routes', 'Registering routes');

  const apiPrefix = process.env.API_PREFIX || '/api';

  const routes = glob.sync('src/**/*.routes.ts').map(async routePath => {
    const path = routePath.replace('src/', '@app/');
    const route: () => AppRoute<express.Router> = (await import(path)).default;

    if (route && typeof route === 'function') {
      const { prefix: routePrefix, router } = route();
      app.use(apiPrefix.concat(routePrefix), router);
      return;
    }

    throw new Error(`The route module "${path}" has no exported a function.`);
  });

  debug('app:routes', 'Found %d route(s) to registered', routes.length);

  await Promise.all(routes);
};
