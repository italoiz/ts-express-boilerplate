import { NextFunction, Request } from 'express';

import debug from '@utils/debug';

export default function (req: Request, _: any, next: NextFunction): void {
  const method = req.method.toUpperCase();
  const routeUrl = req.url;

  debug('http', '%s %s', method, routeUrl);

  return next();
}
