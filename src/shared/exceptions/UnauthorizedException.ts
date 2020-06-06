import { HttpStatusCode } from '@shared/interfaces/http';

import { CoreException } from './CoreException';

export class UnauthorizedException extends CoreException {
  constructor(message: string, code?: string) {
    super(message, HttpStatusCode.UNAUTHORIZED, code);
  }
}
