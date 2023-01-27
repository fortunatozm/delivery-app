import api from '../lib/axios';

const registerValidation = async (data) => {
  try {
    const dados = await api.post('register', data);
    return dados;
  } catch (error) {
    return error.response.data.message;
  }
};

export default registerValidation;
