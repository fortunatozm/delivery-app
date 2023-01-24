import React from 'react';

function LoginForm() {
  return (
    <form>
      <label htmlFor="email">
        Login
        <input
          type="email"
          name="email"
          id="email"
          data-testid="common_login__input-email"
        />
      </label>

      <label htmlFor="senha">
        Senha
        <input
          type="password"
          name="password"
          id="password"
          data-testid="common_login__input-password"
        />
      </label>

      <button
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
