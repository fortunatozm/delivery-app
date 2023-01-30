import api from '../lib/axios';

export const registerValidation = async (data) => {
  try {
    const dados = await api.post('register', data);
    return dados;
  } catch (error) {
    return error.response.data.message;
  }
};

export const salesByUserId = async () => {
  try {
    const dados = await instance.get('pedidos');
    return dados;
  } catch (error) {
    console.log(error);
    return error;
  }
};
