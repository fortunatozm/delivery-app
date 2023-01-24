import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import postLogin from '../services/postLogin';
import requests, { setTokenHeaders } from '../services/requests';

function LoginForm() {
  const history = useHistory();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  const validateFormData = () => {
    const MIN_PASSWORD_SIZE = 6;

    const isValidEmail = /\S+@\S+\.\S+/.test(formData.email);
    const isValidPassword = formData.password.length >= MIN_PASSWORD_SIZE;

    setSubmitButtonDisabled(!(isValidEmail && isValidPassword));
  };

  useEffect(validateFormData, [formData]);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const saveUser = async (token) => {
    try {
      const user = await requests.get.user();
      localStorage.setItem('user', JSON.stringify({ ...user, token }));
    } catch (err) {
      console.error('Usuário não encontrado');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await postLogin(formData);
      setTokenHeaders(token);
      await saveUser(token);
      history.push('/costumer');
    } catch (error) {
      console.error('Email ou senha inválidos');
    }
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="email">
        Login
        <input
          onChange={ handleChange }
          value={ setFormData.email }
          type="email"
          name="email"
          id="email"
          data-testid="common_login__input-email"
        />
      </label>

      <label htmlFor="senha">
        Senha
        <input
          onChange={ handleChange }
          value={ setFormData.password }
          type="password"
          name="password"
          id="password"
          data-testid="common_login__input-password"
        />
      </label>

      <button
        disabled={ submitButtonDisabled }
        type="submit"
        data-testid="common_login__button-login"
      >
        Login
      </button>
      <button type="button" data-testid="common_login__button-register">
        Ainda não tenho conta
      </button>
    </form>
  );
}

export default LoginForm;
