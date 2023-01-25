import React from 'react';
import '../componentsCss/register.css';
import registerValidation from '../services/registerService';

function Registers() {
  const dataValid = async ({ target }) => {
    console.log(target);
    const dados = {
      email: 'fortunato@hotmail.com',
      name: 'Fortunato',
      role: 'dados',
      password: 'deucerto' };
    const data = await registerValidation(dados);
    console.log(data);
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
        Erros de Cadastro
      </div>
    </div>
  );
}

export default Registers;
