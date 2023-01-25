import React, { useState } from 'react';
import '../componentsCss/register.css';
import registerValidation from '../services/registerService';

function Registers() {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    error: null,
    role: '',
  });

  const dataValid = async () => {
    const { email, name, role, password } = register;
    const data = await registerValidation({ email, name, role, password });
    console.log({ name, email, password });
    console.log(data);
    if (typeof data === 'string') {
      setRegister((prevRegister) => ({ ...prevRegister, error: data }));
    } else {
      setRegister((prevRegister) => ({ ...prevRegister, error: null }));
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
              name="nome"
              placeholder="Seu nome"
              value={ register.name }
              onChange={ ({ target }) => {
                const { value } = target;
                setRegister((prevRegister) => ({ ...prevRegister, name: value }));
              } }
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
              onChange={ ({ target }) => {
                const { value } = target;
                setRegister((prevRegister) => ({ ...prevRegister, email: value }));
              } }
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
              name="senha"
              placeholder="********"
              value={ register.senha }
              onChange={ ({ target }) => {
                const { value } = target;
                setRegister((prevRegister) => ({ ...prevRegister, password: value }));
              } }
            />
          </label>
          <br />
          <button
            type="button"
            data-testid="common_register__button-register"
            onClick={ dataValid }
          >
            Cadastrar
          </button>
        </form>
      </div>
      <div data-testid="common_register__element-invalid_registaer">
        { register.error }
      </div>
    </div>
  );
}

export default Registers;
