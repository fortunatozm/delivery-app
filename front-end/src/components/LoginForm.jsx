import React, { useState, useEffect } from 'react';
import { func } from 'prop-types';
import { Link } from 'react-router-dom';
import login from '../utils/login';

function LoginForm({ redirectByRole }) {
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
      redirectByRole(userRole);
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
        </p>
      ) : null}
    </form>
  );
}

LoginForm.propTypes = {
  redirectByRole: func.isRequired,
};

export default LoginForm;
