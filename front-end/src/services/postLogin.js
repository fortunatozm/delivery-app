import api from '../lib/axios';

const postLogin = async (credentials) => {
  const { data } = await api.post('/auth/login', credentials);
  return data;
};

export default postLogin;
