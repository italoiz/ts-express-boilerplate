import express from 'express';

import { ForbiddenException } from '@shared/exceptions';
import { AppRoute } from '@shared/interfaces/routes';

export default (): AppRoute<express.Router> => {
  const router = express.Router();
  const prefix = '/example'; // The route prefix, like this: `/api/example`.

  /**
   * This route represents an API URL like `/api/example`.
   */
  router.get('/', (req, res) => {
    return res.send('/example');
  });

  /**
   * This an example of authentication flow by middleware, all routes after this middleware,
   * needs pass the query string `?auth=1` to works correctly.
   */
  router.use((req, res, next) => {
    if (!req.query.auth) {
      throw new ForbiddenException('Forbidden Access');
    }
    return next();
  });

  /**
   * This authenticated routes represents an API URL like `/api/example/authenticated`.
   */
  router.get('/authenticated', (req, res) => res.send('/example/sub-example'));

  return {
    prefix,
    router,
  };
};
