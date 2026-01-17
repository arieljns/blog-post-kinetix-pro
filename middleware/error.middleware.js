const { AppError } = require("../errors/AppError");
const logger = require("../utils/logger")

module.exports = (err, req, res, next) => {
  const requestId = req.requestId;

  if (err instanceof AppError) {
    logger.error({
      requestId,
      code: err.code,
      message: err.message,
      details: err.details,
      method: req.method,
      path: req.originalUrl,
      userId: req.user?.id, 
    });

    return res.status(err.statusCode).json({
      error: {
        code: err.code,
        message: err.message,
        details: err.details,
        requestId
      }
    });
  }

  logger.error({
    requestId,
    code: "INTERNAL_ERROR",
    message: err.message,
    stack: err.stack,
    method: req.method,
    path: req.originalUrl,
    userId: req.user?.id,
  });

  return res.status(500).json({
    error: {
      code: "INTERNAL_ERROR",
      message: "Something went wrong",
      requestId
    }
  });
};
