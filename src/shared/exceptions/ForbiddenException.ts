import { HttpStatusCode } from '@shared/interfaces/http';

import { CoreException } from './CoreException';

export class ForbiddenException extends CoreException {
  constructor(message: string, code?: string) {
    super(message, HttpStatusCode.FORBIDDEN, code);
  }
}
