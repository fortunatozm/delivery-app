const md5 = require('md5');
const { User } = require('../database/models');
const { createToken } = require('../utils/jwt.util');

const loginServicePost = async (data) => {
  const { email, password } = data;
  const newPassword = md5(password);

  const result = await User.findOne({
    where: { email, password: newPassword },
  });

  if (result === null) {
    return { status: 400, message: 'Email ou senha inválidos' };
  }

  return { status: 200, message: createToken() };
};

module.exports = { loginServicePost };
