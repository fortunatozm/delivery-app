const errorMiddleware = (err, _req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal error';

  return res.status(status).json({ message });
};

module.exports = errorMiddleware;
