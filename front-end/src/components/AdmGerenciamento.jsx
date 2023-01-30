import React from 'react';

function AdmGerenciamento() {
  return (
    <div>
      <form>
        <span>
          Cadastrar Novo Usuário
        </span>
        <br />
        <label htmlFor="nameId">
          Nome
          <br />
          <input
            type="text"
            data-testid="admin_manage__input-name"
            name="name"
            placeholder="Seu nome"
          />
        </label>
        <br />

        <label htmlFor="emailId">
          Email
          <br />
          <input
            type="text"
            data-testid="admin_manage__input-email"
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
            data-testid="admin_manage__input-password"
            id="senhaId"
            name="password"
            placeholder="********"
          />
        </label>
        <br />

        <label htmlFor="TipoId">
          Tipo
          <br />
          <select
            data-testid="admin_manage__select-role"
            id="TipoId"
            name="vendedora"
            defaultValue="P. Vendedora"
          >
            <option value="P. Vendedora">
              P. Vendedora
            </option>
            <option value="P. Administradora">
              P. Administradora
            </option>
            <option value="Cliente">
              Cliente
            </option>
          </select>
        </label>
        <br />

        <button
          type="button"
          data-testid="admin_manage__button-register"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default AdmGerenciamento;
