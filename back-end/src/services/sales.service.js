const { Sale } = require('../database/models');

const getSalesbyUserId = async (id) => {
  if (id) {
    const sales = await Sale.findAll({ where: { userId: id } });
    if (sales) {
      return { status: 200, message: sales };
    } else {
      return { status: 204, message: 'Usuário não fez nenhum pedido' };
    }
  } else {
    return { status: 400, message: 'Usuário não reconhecido' };
  }
};

module.exports = getSalesbyUserId;