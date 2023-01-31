const { User, Sale, SaleProduct } = require('../database/models');
// const { createToken } = require('../utils/jwt.util');

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
  const { 
    userId, 
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
    products,
  } = data
  // const novaData = new Date(saleDate);
  // console.log(novaData)
  

  
  const sale = await Sale.create({
    userId, 
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate: new Date(),
    status
  });
  
  // const result = await Sale.findByPk(sale)
  // console.log(sale.id)
  try{ 
    products.forEach((item) => {
    SaleProduct.create({ saleId: sale.id, productId: item.productId, quantity: item.quantity })
  })}catch(error){
    console.log(error);
  }

  return {
    status: 201,
    message: sale.id
  }

}

module.exports = { checkoutServiceGet, checkoutServicePost };
