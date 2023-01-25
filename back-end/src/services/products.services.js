const { Product } = require('../database/models');

const productServiceGet = async () => {
  const result = await Product.findAll({});

  if (result === null) {
    return { status: 404, message: 'Itens não encontrados' };
  }

  return { status: 200, message: result };
};

module.exports = { productServiceGet };