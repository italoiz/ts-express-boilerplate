import { HttpStatusCode } from '@shared/interfaces/http';

import { CoreException } from './CoreException';

export class InternalServerErrorException extends CoreException {
  constructor(message: string, code?: string) {
    super(message, HttpStatusCode.INTERNAL_SERVER_ERROR, code);
  }
}
