require('dotenv').config();
const jwt = require('jsonwebtoken');

const createToken = ({ email }) => {
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: '1y',
    algorithm: 'HS256',
  });
  return token;
};

const authenticate = async (token) => {
  try {
    const payload = await jwt.verify(token, process.env.JWT_SECRET);
    return payload;
  } catch (error) {
    return { status: 400, message: 'Token inválido.' };
  }
};

module.exports = { createToken, authenticate };
