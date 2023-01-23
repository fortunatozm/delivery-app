const md5 = require('md5');
const { Op } = require('sequelize');
const { User } = require('../database/models');
const { validateRegister } = require('./validations/validator');

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

module.exports = {
  registerServicePost,
};
