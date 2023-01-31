import api from '../lib/axios';

const postSales = async ({
  userId,
  sellerId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  status,
  products,
}) => {
  const { data } = await api.post('/customer/orders', { userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
    products });

  return data;
};

export default postSales;
