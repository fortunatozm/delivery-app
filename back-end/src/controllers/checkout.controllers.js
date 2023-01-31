const { checkoutService } = require('../services');

const checkoutControllerGet = async (_req, res) => {
  const result = await checkoutService.checkoutServiceGet();

  return res.status(result.status).json(result.message);
};


const checkoutControllerPost = async (req, res) => {
  const data = req.body
const result = await checkoutService.checkoutServicePost(data)
return res.status(result.status).json({id: result.message})
}
module.exports = { checkoutControllerGet, checkoutControllerPost };
