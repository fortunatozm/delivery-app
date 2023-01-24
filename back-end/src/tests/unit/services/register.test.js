const { expect } = require("chai");
const sinon = require("sinon");

const { User } = require("../../../database/models");
const { registerServicePost } = require("../../../services/register.services");
const { newUserMock } = require("../../mocks/user.mock");

describe("Register service", function () {
  afterEach(sinon.restore);

  describe("POST", function () {
    it("Cadastra um usuário com sucesso", async function () {
      sinon.stub(User, "findOne").resolves(null);
      sinon.stub(User, "create").resolves(newUserMock);

      const result = await registerServicePost(newUserMock);

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
      const result = await registerServicePost({
        ...newUserMock,
        password: "a",
      });

      expect(result.status).to.be.equal(400);
    });

    it("Retorna um error se o usuário já for cadastrado", async function () {
      sinon.stub(User, "findOne").resolves(newUserMock);

      const result = await registerServicePost(newUserMock);

      const expected = { status: 409, message: "Usuário já cadastrado" };

      expect(result).to.deep.equal(expected);
    });
  });
});
