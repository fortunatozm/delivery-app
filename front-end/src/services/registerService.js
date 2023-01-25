import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/auth',
});

const registerValidation = async (data) => {
  try {
    const dados = await instance.post('register', data);
    return dados;
  } catch (error) {
    return error.response.data.message;
  }
};

export default registerValidation;
