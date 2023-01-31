const { Sale } = require('../database/models');

const getSalesbyUserId = async (id) => {
  if (id) {
    const sales = await Sale.findAll({ where: { userId: id } });
    return { status: 200, message: sales };
  }
  return { status: 400, message: 'Usuário não reconhecido' };
};

module.exports = getSalesbyUserId;
