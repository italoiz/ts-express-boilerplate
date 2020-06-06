import { Request, Response, NextFunction } from 'express';

import { CoreException } from '@shared/exceptions/CoreException';
import { HttpStatusCode } from '@shared/interfaces/http';

export default (
  error: Error,
  req: Request,
  res: Response,
  _: NextFunction,
): Response => {
  if (error instanceof CoreException) {
    return res.status(error.status).json({
      code: error.code,
      message: error.message,
    });
  }

  return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
    message: 'Internal server error!',
  });
};
