import { HttpStatusCode } from '@shared/interfaces/http';

import { CoreException } from './CoreException';

export class TooManyRequestsException extends CoreException {
  constructor(message: string, code?: string) {
    super(message, HttpStatusCode.TOO_MANY_REQUESTS, code);
  }
}
