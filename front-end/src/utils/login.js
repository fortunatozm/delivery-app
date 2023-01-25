import postLogin from '../services/postLogin';
import { setTokenHeaders } from '../services/requests';
import saveLoggedUser from './saveLoggedUser';

export default async function login(formData) {
  try {
    const { token } = await postLogin(formData);
    setTokenHeaders(token);
    const { role } = await saveLoggedUser(token);
    return role;
  } catch (err) {
    throw new Error('Usuário não encontrado');
  }
}
