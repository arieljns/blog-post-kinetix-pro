const { randomUUID } = require("crypto");

module.exports = (req, res, next) => {
  const requestId = randomUUID();
  req.requestId = requestId;
  res.setHeader("X-Request-Id", requestId);
  next();
};
