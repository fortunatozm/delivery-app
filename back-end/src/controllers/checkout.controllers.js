const { checkoutService } = require('../services');

const checkoutControllerGet = async (_req, res) => {
  const result = await checkoutService.checkoutServiceGet();
  console.log('passou controller');
  return res.status(result.status).json(result.message);
};

module.exports = { checkoutControllerGet };
