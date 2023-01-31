import React, { useState } from 'react';
import { registerValidation } from '../services/otherService';

function AdmGerenciamento() {
  const [adminReg, setAdminReg] = useState({
    name: '',
    email: '',
    role: 'customer',
    password: '',
    error: null,
    boolButton: true,
  });

  const onChangeRegisters = ({ target }) => {
    const { name, value } = target;
    setAdminReg((prevState) => ({ ...prevState, [name]: value }));

    const MAX_NAME_LENGTH = 12;
    const MAX_PASSWORD_LENGTH = 5;
    const { email, name: nome, password } = adminReg;

    const isValidEmail = /\S+@\S+\.\S+/.test(email);

    if (isValidEmail
      && nome.length >= MAX_NAME_LENGTH
      && password.length >= MAX_PASSWORD_LENGTH) {
      setAdminReg((prevRegister) => ({ ...prevRegister, boolButton: false }));
    } else {
      setAdminReg((prevRegister) => ({ ...prevRegister, boolButton: true }));
    }
  };

  const dataValid = async () => {
    const { email, name, role, password } = adminReg;
    const data = await registerValidation({ email, name, role, password });
    if (typeof data === 'string') {
      setAdminReg((prevRegister) => ({ ...prevRegister,
        error: data }));
    } else {
      setAdminReg((prevRegister) => ({ ...prevRegister, error: null }));
    }
  };

  return (
    <div>
      {/* onSubmit={ dataValid } */}
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
            value={ adminReg.name }
            onChange={ onChangeRegisters }
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
            value={ adminReg.email }
            onChange={ onChangeRegisters }
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
            value={ adminReg.password }
            onChange={ onChangeRegisters }
          />
        </label>
        <br />

        <label htmlFor="TipoId">
          Tipo
          <br />
          <select
            data-testid="admin_manage__select-role"
            id="TipoId"
            name="role"
            value={ adminReg.role }
            // defaultValue="customer"
            onChange={ onChangeRegisters }
          >
            <option value="seller">
              P. Vendedora
            </option>
            <option value="administrator">
              P. Administradora
            </option>
            <option value="customer">
              Cliente
            </option>
          </select>
        </label>
        <br />

        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ adminReg.boolButton }
          onClick={ dataValid }
        >
          Cadastrar
        </button>
      </form>
      <div data-testid="admin_manage__element-invalid-register">
        { adminReg.error }
      </div>
    </div>
  );
}

export default AdmGerenciamento;
