import React from 'react';
import '../componentsCss/register.css';

function Registers() {
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
              id="nameId"
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
              id="emailId"
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
              id="senhaId"
              name="senha"
              placeholder="********"
            />
          </label>
          <br />
          <button type="button" id="button">
            Cadastrar
          </button>
        </form>
      </div>
      <div className="registerError">
        Erros de Cadastro
      </div>
    </div>
  );
}

export default Registers;
