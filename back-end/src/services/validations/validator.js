const { registerSchema } = require('./schema');

const validateRegister = (data) => {
  const { error, value } = registerSchema.validate(data);
  if (error) return { status: 400, message: error.message };
  return { status: null, message: value };
};

module.exports = {
  validateRegister,
};
