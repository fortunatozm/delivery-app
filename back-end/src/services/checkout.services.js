const { User } = require('../database/models');

const checkoutServiceGet = async () => {
  const result = await User.findAll({
    where: {
      role: 'seller',
    },
    attributes: { exclude: 'password' },
  });

  return {
    status: 200,
    message: result,
  };
};

module.exports = { checkoutServiceGet };
