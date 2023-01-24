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
  },
};

export default requests;
