const { getSalesbyUserId } = require('../services');
// const { createToken } = require('../utils/jwt.util');
const { getUser } = require('../services/auth.services');
// const jwt = require('jsonwebtoken');

  // Cliente Zé Birita
  // zebirita@email.com
  // $#zebirita#$

const salesControllerByUserId = async (req, res) => {
  const { authorization } = req.headers;

  const { message: { id } } = await getUser(authorization);

  const result = await getSalesbyUserId(id);
 
  return res.status(result.status).json(result.message);
};

module.exports = { salesControllerByUserId };
