import { ErrorSeverity, BaseError } from '../infrastructure';

export default class UserAlreadyExistsException extends BaseError {
  constructor(error: Error, data?: any) {
    super(
      {
        code: '1',
        message: error.message ? error.message : 'user already registered',
        severity: ErrorSeverity.ERROR,
        error,
      },
      data,
    );
  }
}
