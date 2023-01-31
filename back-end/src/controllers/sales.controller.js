const { getSalesbyUserId } = require('../services');
// const { createToken } = require('../utils/jwt.util');
const { getUser } = require('../services/auth.services');
const { getSalesBySellerId } = require('../services/sales.service');
// const jwt = require('jsonwebtoken');

// Cliente Zé Birita
// zebirita@email.com
// $#zebirita#$

const salesControllerByUserId = async (req, res) => {
  const { authorization } = req.headers;

  const {
    message: { id },
  } = await getUser(authorization);

  const result = await getSalesbyUserId(id);

  return res.status(result.status).json(result.message);
};

const salesControllerBySellerId = async (req, res) => {
  const { email } = res.locals.user;

  const { status, message } = await getSalesBySellerId(email);

  if (status) return res.status(status).json({ message });

  res.status(200).json(message);
};

module.exports = { salesControllerByUserId, salesControllerBySellerId };
