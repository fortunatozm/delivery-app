const { checkoutService } = require('../services');

const checkoutControllerGet = async (_req, res) => {
  const result = await checkoutService.checkoutServiceGet();

  return res.status(result.status).json(result.message);
};

const checkoutControllerPost = async (req, res) => {
  const data = req.body;
  const result = await checkoutService.checkoutServicePost(data);
  return res.status(result.status).json({ id: result.message });
};

const orderControllerGet = async (req, res) => {
  const { id } = req.params;
  const result = await checkoutService.orderServiceGet(id);
  return res.status(result.status).json(result.message);
};
module.exports = { checkoutControllerGet, checkoutControllerPost, orderControllerGet };
