const { User, Sale, SaleProduct } = require('../database/models');

const checkoutServiceGet = async () => {
  const result = await User.findAll({
    where: {
      role: 'seller',
    },
    attributes: { exclude: 'password' },
  });

  return {
    status: 200,
    message: result,
  };
};

const checkoutServicePost = async (data) => {
  const sale = await Sale.create({
    userId: data.userId,
    sellerId: data.sellerId,
    totalPrice: data.totalPrice,
    deliveryAddress: data.deliveryAddress,
    deliveryNumber: data.deliveryNumber,
    saleDate: new Date(),
    status: data.status,
  });

  try {
    data.products.forEach(({ productId, quantity }) => {
      SaleProduct.create({ saleId: sale.id, productId, quantity });
    });
  } catch (error) {
    console.log(error);
  }

  return { status: 201, message: sale.id };
};

module.exports = { checkoutServiceGet, checkoutServicePost };
