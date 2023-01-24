const md5 = require('md5');
const { Product } = require('../database/models');
const { createToken } = require('../utils/jwt.util');

const productServiceGet = async (data) => {
  const result = await Product.findAll({});

  if (result === null) {
    return { status: 404, message: 'Itens não encontrados' };
  }

  return { status: 200, message: result };
};

module.exports = { productServiceGet };