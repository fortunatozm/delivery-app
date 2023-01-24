import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/auth',
});

const registerValidation = async (data) => instance.post('register', data);

export default registerValidation;
