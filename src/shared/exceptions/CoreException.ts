import { HttpStatusCode } from '@shared/interfaces/http';

export abstract class CoreException extends Error {
  /**
   * Error name.
   */
  public readonly name: string;

  /**
   * Error message.
   */
  public readonly message: string;

  /**
   * Error status in number, is a helpful to define the HTTP status code.
   */
  public readonly status: HttpStatusCode;

  /**
   * Unique error code.
   */
  public readonly code?: string;

  constructor(
    message: string,
    status = HttpStatusCode.INTERNAL_SERVER_ERROR,
    code?: string,
  ) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.status = status;
    this.code = code;
    this.stack = new Error(message).stack;
  }
}
