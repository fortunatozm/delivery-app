import React from "react";
import { screen } from "@testing-library/react";
import renderWithRouter from "./helpers/renderWithRouter";
import Login from "../pages/Login";


describe("Página de login", () => {
  it("Verifica se os inputs foram renderizados", () => {
    const { history } = renderWithRouter(<Login />);
    history.push("/login");

    const emailInput = screen.getByTestId("common_login__input-email");
    const passwordInput = screen.getByTestId("common_login__input-password");
    const loginButton = screen.getByTestId("common_login__button-login");
    const registerButton = screen.getByTestId("common_login__button-register");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });
});
