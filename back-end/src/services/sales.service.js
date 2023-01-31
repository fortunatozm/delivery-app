const { User, Sale } = require('../database/models');

const getSalesbyUserId = async (id) => {
  if (id) {
    const sales = await Sale.findAll({ where: { userId: id } });
    return { status: 200, message: sales };
  }
  return { status: 400, message: 'Usuário não reconhecido' };
};

const getSalesBySellerId = async (sellerEmail) => {
  const seller = await User.findOne({
    where: { email: sellerEmail },
  });

  if (!seller) {
    return { status: 404, message: 'Pessoa vendedora não encontrada' };
  }

  if (seller.role !== 'seller') {
    return { status: 400, message: 'A pessoa usuária não é vendedora' };
  }

  const sales = await Sale.findAll({
    where: { sellerId: seller.id },
  });

  return { status: null, message: sales };
};

module.exports = { getSalesbyUserId, getSalesBySellerId };
