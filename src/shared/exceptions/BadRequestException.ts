import { HttpStatusCode } from '@shared/interfaces/http';

import { CoreException } from './CoreException';

export class BadRequestException extends CoreException {
  constructor(message: string, code?: string) {
    super(message, HttpStatusCode.BAD_REQUEST, code);
  }
}
