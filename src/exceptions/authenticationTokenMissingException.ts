import HttpException from './HttpException';

class AuthenticationTokenMissingException extends HttpException {
  constructor() {
    super(401, 'No token provided');
  }
}

export default AuthenticationTokenMissingException;