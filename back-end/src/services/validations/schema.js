const Joi = require('joi');

const registerSchema = Joi.object({
  name: Joi.string().required().min(12),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
  role: Joi.string().required(),
});

module.exports = {
  registerSchema,
};
