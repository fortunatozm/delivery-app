const chai = require("chai");
const sinon = require("sinon");

chai.use(require("chai-http"));
chai.use(require("sinon-chai"));
const { expect } = chai;

const { registerController } = require("../../../controllers");
const { registerService } = require("../../../services");
const { newUserMock, newUserResponseMock } = require("../../mocks/user.mock");

describe("Register controller", function () {
  afterEach(sinon.restore);

  describe("POST", function () {
    it("Cadastra um novo usuário com sucesso", async function () {
      const req = { body: newUserMock };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(registerService, "registerServicePost")
        .resolves({ status: null, message: newUserResponseMock });

      await registerController.registerControllerPost(req, res);

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
        .stub(registerService, "registerServicePost")
        .resolves({ status: 400, message: "invalid password" });

      await registerController.registerControllerPost(req, res);

      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({ message: "invalid password" });
    });

    it("Retorna o erro 409 se o usuário já for cadastrado", async function () {
      const req = { body: newUserMock };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(registerService, "registerServicePost")
        .resolves({ status: 409, message: "Usuário já cadastrado" });

      await registerController.registerControllerPost(req, res);

      expect(res.status).to.have.been.calledWith(409);
      expect(res.json).to.have.been.calledWith({
        message: "Usuário já cadastrado",
      });
    });
  });
});
