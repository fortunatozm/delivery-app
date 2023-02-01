import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function Login() {
  const history = useHistory();

  const redirectByRole = (role) => {
    switch (role) {
    case 'administrator':
      history.push('/admin/manage');
      break;
    case 'seller':
      history.push('/seller/orders');
      break;
    default:
      history.push('/customer/products');
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) redirectByRole(user.role);
  }, []);

  return (
    <LoginForm redirectByRole={ redirectByRole } />
  );
}

export default Login;
