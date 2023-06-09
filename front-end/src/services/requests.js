import api from '../lib/axios';

export const setTokenHeaders = (token) => {
  api.defaults.headers.common.Authorization = token;
};

const requests = {
  get: {
    products: async () => {
      const { data } = await api.get('/products');
      return data;
    },
    user: async () => {
      const { data } = await api.get('/me');
      return data;
    },
    pedidos: async () => {
      const { data } = await api.get('/pedidos');
      return data;
    },
    seller: async () => {
      const { data } = await api.get('/customer/checkout');
      return data;
    },
    sales: async () => {
      const { data } = await api.get('/sales');
      return data;
    },
    orders: async (id) => {
      const { data } = await api.get(`/customer/orders/${id}`);
      return data;
    },
  },
};

export default requests;
