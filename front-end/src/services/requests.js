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
      const { data } = await api.get('/auth/me');
      return data;
    },
  },
};

export default requests;
