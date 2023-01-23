import axios from 'axios';

const URL = 'http://localhost:3001/auth';

const postLogin = (email, password) => {
  axios.post(URL, {
    email,
    password,
  })
    .then((res) => res)
    .catch((err) => err);
};

export default postLogin;
