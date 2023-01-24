require("dotenv").config();
const jwt = require("jsonwebtoken");

const createToken = ({ email }) => {
  const token = jwt.sign({ email }, 'secret_key', {
    expiresIn: "7d",
    algorithm: "HS256",
  });
  return token;
};

const authenticate = async (token) => {
  try {
    const payload = await jwt.verify(token, 'secret_key');
    return payload;
  } catch (error) {
    return { status: 400, message: "Token inválido." };
  }
};

module.exports = { createToken, authenticate };
