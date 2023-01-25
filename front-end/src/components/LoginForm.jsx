import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import login from '../utils/login';

function LoginForm() {
  const history = useHistory();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [errorText, setErrorText] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setErrorText(false);
      const userRole = await login(formData);
      history.push(`/${userRole}/products`);
    } catch (err) {
      setErrorText(true);
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
      <Link to="/register">
        <button type="button" data-testid="common_login__button-register">
          Ainda não tenho conta
        </button>
      </Link>
      {errorText ? (
        <p data-testid="common_login__element-invalid-email">
          Email ou senha inválidos
        </p>) : null}
    </form>
  );
}

export default LoginForm;
