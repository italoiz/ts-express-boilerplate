import { HttpStatusCode } from '@shared/interfaces/http';

import { CoreException } from './CoreException';

export class NotFoundException extends CoreException {
  constructor(message: string, code?: string) {
    super(message, HttpStatusCode.NOT_FOUND, code);
  }
}
