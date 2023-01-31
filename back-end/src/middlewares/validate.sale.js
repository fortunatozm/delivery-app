const { authenticate } = require('../utils/jwt.util');

const saleMiddleware = async (req, res, next) => {
  const data = req.headers;
  const { authorization } = data;

  const result = await authenticate(authorization);

  if (result.status === 400) {
    return res.status(400).json({ message: 'Token inválido.' });
  }

  res.locals.user = result;
  next();
};

module.exports = saleMiddleware;
