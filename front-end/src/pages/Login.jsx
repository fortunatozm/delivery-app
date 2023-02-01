import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function Login() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      if (user.role === 'customer') history.push('/customer/products');
      if (user.role === 'administrator') history.push('/admin/manage');
    }
  }, []);

  return (
    <LoginForm />
  );
}

export default Login;
