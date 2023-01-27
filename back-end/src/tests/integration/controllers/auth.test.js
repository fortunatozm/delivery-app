const chai = require("chai");
const sinon = require("sinon");

chai.use(require("chai-http"));
chai.use(require("sinon-chai"));
const { expect } = chai;

const { authController } = require("../../../controllers");
const { authService } = require("../../../services");
const { newUserMock, newUserResponseMock } = require("../../mocks/user.mock");

describe("Auth controller", function () {
  afterEach(sinon.restore);

  describe("Register", function () {
    it("Cadastra um novo usuário com sucesso", async function () {
      const req = { body: newUserMock };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(authService, "registerServicePost")
        .resolves({ status: null, message: newUserResponseMock });

      await authController.registerControllerPost(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(newUserResponseMock);
    });

    it("Retorna o erro 400 se algum campo estiver inválido", async function () {
      const req = {
        body: {
          ...newUserMock,
          password: "1",
        },
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(authService, "registerServicePost")
        .resolves({ status: 400, message: "invalid password" });

      await authController.registerControllerPost(req, res);

      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({
        message: "invalid password",
      });
    });

    it("Retorna o erro 409 se o usuário já for cadastrado", async function () {
      const req = { body: newUserMock };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(authService, "registerServicePost")
        .resolves({ status: 409, message: "Usuário já cadastrado" });

      await authController.registerControllerPost(req, res);

      expect(res.status).to.have.been.calledWith(409);
      expect(res.json).to.have.been.calledWith({
        message: "Usuário já cadastrado",
      });
    });
  });

  describe("Login", function () {
    it("Faz o login com sucesso", async function () {
      const req = {
        body: {
          name: "nome aleatorio",
          email: "email@test.com",
        },
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(authService, "loginServicePost")
        .resolves({ status: 200, message: "random-token" });

      await authController.loginControllerPost(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith({
        token: "random-token",
      });
    });

    it("Retorna o erro 404 se o email ou senha forem inválidos", async function () {
      const req = {
        body: {
          name: "nome aleatorio",
          email: "email@test.com",
        },
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(authService, "loginServicePost")
        .resolves({ status: 404, message: "Email ou senha inválidos" });

      await authController.loginControllerPost(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({
        message: "Email ou senha inválidos",
      });
    });
  });

  describe("Get user", function () {
    it("Retorna as informações do usuário com sucesso", async function () {
      const req = {
        headers: {
          authorization: "random-token",
        },
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(authService, "getUser")
        .resolves({ status: null, message: newUserResponseMock });

      await authController.userDataGet(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(newUserResponseMock);
    });

    it("Retorna o erro 400 se o token for inválido", async function () {
      const req = {
        headers: {
          authorization: "invalid-token",
        },
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(authService, "getUser")
        .resolves({ status: 400, message: "Token inválido." });

      await authController.userDataGet(req, res);

      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({
        message: "Token inválido.",
      });
    });

    it("Retorna o erro 404 se o usuário não existir", async function () {
      const req = {
        headers: {
          authorization: "random-token",
        },
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(authService, "getUser")
        .resolves({ status: 404, message: "Usuário não encontrado" });

      await authController.userDataGet(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({
        message: "Usuário não encontrado",
      });
    });
  });
});
