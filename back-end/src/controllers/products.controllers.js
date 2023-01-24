const { productService } = require('../services');

const productsControllerGet = async (_req, res) => {
    const result = await productService.productServiceGet();

    return res.status(result.status).json(result.message);
  };
  
  module.exports = {
    productsControllerGet,
  };