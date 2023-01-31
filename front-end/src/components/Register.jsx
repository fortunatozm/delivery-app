import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../componentsCss/register.css';
import { registerValidation } from '../services/otherService';
import login from '../utils/login';

function Registers() {
  const history = useHistory();
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    error: null,
    boolButton: true,
  });

  const onChangeRegisters = ({ target }) => {
    const { name, value } = target;
    setRegister((prevState) => ({ ...prevState, [name]: value }));

    const MAX_NAME_LENGTH = 12;
    const MAX_PASSWORD_LENGTH = 5;
    const { email, name: nome, password } = register;

    const isValidEmail = /\S+@\S+\.\S+/.test(email);

    if (isValidEmail
      && nome.length >= MAX_NAME_LENGTH
      && password.length >= MAX_PASSWORD_LENGTH) {
      setRegister((prevRegister) => ({ ...prevRegister, boolButton: false }));
    } else {
      setRegister((prevRegister) => ({ ...prevRegister, boolButton: true }));
    }
  };

  const handleSubmit = async () => {
    // e.preventDefault();

    try {
      const userRole = await login({
        email: register.email,
        password: register.password });

      history.push(`/${userRole}/products`);
    } catch (err) {
      return err.message;
    }
  };

  const dataValid = async () => {
    const { email, name, password } = register;
    const data = await registerValidation({ email, name, password });
    if (typeof data === 'string') {
      setRegister((prevRegister) => ({ ...prevRegister, error: data }));
    } else {
      setRegister((prevRegister) => ({ ...prevRegister, error: null }));
      handleSubmit();
    }
  };

  return (
    <div className="registerClass">
      <div className="paragrafoFrom">
        Cadastro
      </div>
      <div className="form">
        <form>
          <label htmlFor="nameId">
            Nome
            <br />
            <input
              type="text"
              data-testid="common_register__input-name"
              name="name"
              placeholder="Seu nome"
              value={ register.name }
              onChange={ onChangeRegisters }
            />
          </label>
          <br />

          <label htmlFor="emailId">
            Email
            <br />
            <input
              type="text"
              data-testid="common_register__input-email"
              name="email"
              placeholder="seu-email@site.com.br"
              value={ register.email }
              onChange={ onChangeRegisters }
            />
          </label>
          <br />

          <label htmlFor="senhaId">
            Senha
            <br />
            <input
              type="password"
              data-testid="common_register__input-password"
              id="senhaId"
              name="password"
              placeholder="********"
              value={ register.password }
              onChange={ onChangeRegisters }
            />
          </label>
          <br />
          <button
            type="button"
            data-testid="common_register__button-register"
            onClick={ dataValid }
            disabled={ register.boolButton }
          >
            Cadastrar
          </button>
        </form>
      </div>
      <div data-testid="common_register__element-invalid_register">
        { register.error }
      </div>
    </div>
  );
}

export default Registers;
