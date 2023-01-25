require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET || 'secret_key';

const createToken = ({ email }) => {
  const token = jwt.sign({ email }, jwtKey, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  return token;
};

const authenticate = async (token) => {
  try {
    const payload = await jwt.verify(token, jwtKey);
    return payload;
  } catch (error) {
    return { status: 400, message: 'Token inválido.' };
  }
};

module.exports = { createToken, authenticate };
