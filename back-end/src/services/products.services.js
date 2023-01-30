const { Product } = require('../database/models');

const productServiceGet = async () => {
  const result = await Product.findAll();
  return { status: 200, message: result };
};

module.exports = { productServiceGet };