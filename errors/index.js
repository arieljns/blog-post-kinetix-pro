const AppError = require("./AppError");

class ValidationError extends AppError {
  constructor(details) {
    super({
      message: "Invalid request data",
      code: "VALIDATION_ERROR",
      statusCode: 400,
      details
    });
  }
}

class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized") {
    super({ message, code: "UNAUTHORIZED", statusCode: 401 });
  }
}

class ForbiddenError extends AppError {
  constructor(message = "Forbidden") {
    super({ message, code: "FORBIDDEN", statusCode: 403 });
  }
}

class NotFoundError extends AppError {
  constructor(message = "Not found") {
    super({ message, code: "NOT_FOUND", statusCode: 404 });
  }
}

class ConflictError extends AppError {
  constructor(message = "Conflict") {
    super({ message, code: "CONFLICT", statusCode: 409 });
  }
}

module.exports = {
  AppError,
  ValidationError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError
};
