

class AppError extends Error{
  constructor({message, code, statusCode, details}) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    this.details = details || [];

    Error.captureStackTrace(this, this.constructor);
  }
}


module.exports = AppError;