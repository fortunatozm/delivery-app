import requests from '../services/requests';

export default async function saveLoggedUser(token) {
  const user = await requests.get.user();
  localStorage.setItem('user', JSON.stringify({ ...user, token }));
  return user;
}
