import React, { useState, useEffect } from 'react';

function LoginForm() {
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

  return (
    <form>
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
        type="button"
        data-testid="common_login__button-login"
      >
        Login

      </button>
      <button
        type="button"
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta

      </button>
    </form>
  );
}

export default LoginForm;
