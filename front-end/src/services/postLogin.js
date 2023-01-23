import axios from 'axios';

const URL = 'http://localhost:3001/auth/login';

const postLogin = (email, password) => {
  axios.post(URL, {
    email,
    password,
  })
    .then((res) => console.log(res))
    .catch((err) => err);
};

export default postLogin;
