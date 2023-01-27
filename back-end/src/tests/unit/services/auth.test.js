const { expect } = require("chai");
const sinon = require("sinon");
const jwt = require("jsonwebtoken");

const { User } = require("../../../database/models");
const { authService } = require("../../../services");
const { newUserMock, userMock } = require("../../mocks/user.mock");

describe("Auth service", function () {
  afterEach(sinon.restore);

  describe("Register", function () {
    it("Cadastra um usuário com sucesso", async function () {
      sinon.stub(User, "findOne").resolves(null);
      sinon.stub(User, "create").resolves(newUserMock);

      const result = await authService.registerServicePost(newUserMock);

      const expected = {
        status: null,
        message: {
          email: newUserMock.email,
          name: newUserMock.name,
          role: newUserMock.role,
        },
      };

      expect(result).to.deep.equal(expected);
    });

    it("Retorna um erro se um campo estiver inválido", async function () {
      const result = await authService.registerServicePost({
        ...newUserMock,
        password: "a",
      });

      expect(result.status).to.be.equal(400);
    });

    it("Retorna um error se o usuário já for cadastrado", async function () {
      sinon.stub(User, "findOne").resolves(newUserMock);

      const result = await authService.registerServicePost(newUserMock);

      const expected = { status: 409, message: "Usuário já cadastrado" };

      expect(result).to.deep.equal(expected);
    });
  });

  describe("Login", function () {
    it("Faz o login com sucesso", async function () {
      sinon.stub(User, "findOne").resolves(userMock);

      const result = await authService.loginServicePost({
        email: userMock.email,
        password: userMock.password,
      });

      expect(result.status).to.be.equal(200);
      expect(result.message).to.be.a("string");
    });

    it("Retorna um erro se o usuário não existir", async function () {
      sinon.stub(User, "findOne").resolves(null);

      const result = await authService.loginServicePost({
        email: userMock.email,
        password: userMock.password,
      });

      const expected = { status: 404, message: "Email ou senha inválidos" };

      expect(result).to.deep.equal(expected);
    });
  });

  describe("Get user", function () {
    it("Retorna as informações do usuário com sucesso", async function () {
      sinon.stub(jwt, "verify").resolves({ email: userMock.email });
      sinon.stub(User, "findOne").resolves(userMock);

      const result = await authService.getUser("random-token");

      const expected = {
        status: null,
        message: {
          name: userMock.name,
          email: userMock.email,
          role: userMock.role,
        },
      };

      expect(result).to.deep.equal(expected);
    });

    it("Retorna um erro se o token for inválido", async function () {
      sinon.stub(jwt, "verify").rejects();

      const result = await authService.getUser("random-token");

      const expected = { status: 400, message: "Token inválido." };

      expect(result).to.deep.equal(expected);
    });

    it("Retorna um erro se o usuário não existir", async function () {
      sinon.stub(jwt, "verify").resolves({ email: userMock.email });
      sinon.stub(User, "findOne").resolves(null);

      const result = await authService.getUser("random-token");

      const expected = { status: 404, message: "Usuário não encontrado" };

      expect(result).to.deep.equal(expected);
    });
  });
});
