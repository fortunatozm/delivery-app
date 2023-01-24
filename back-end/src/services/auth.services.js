const md5 = require('md5');
const { Op } = require('sequelize');
const { User } = require('../database/models');
const { validateRegister } = require('./validations/validator');
const { createToken } = require('../utils/jwt.util');

const loginServicePost = async (data) => {
  const { email, password } = data;
  const newPassword = md5(password);

  const result = await User.findOne({
    where: { email, password: newPassword },
  });

  if (result === null) {
    return { status: 404, message: 'Email ou senha inválidos' };
  }

  return { status: 200, message: createToken() };
};

const newUserValidator = async (email, name) => {
  const result = await User.findOne({
    where: {
      [Op.or]: [{ email }, { name }],
    },
  });
  return result;
};

const registerServicePost = async (data) => {
  const error = validateRegister(data);
  if (error.status) return error;

  const { email, name, role, password } = data;

  const isUserAlreadyRegistered = await newUserValidator(email, name);
  if (isUserAlreadyRegistered) {
    return { status: 409, message: 'Usuário já cadastrado' };
  }

  const encryptedPassword = md5(password);
  const newUser = { email, name, role };

  await User.create({ ...newUser, password: encryptedPassword });
  return { status: null, message: newUser };
};

module.exports = { loginServicePost, registerServicePost };
