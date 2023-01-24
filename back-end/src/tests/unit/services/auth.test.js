const { expect } = require("chai");
const sinon = require("sinon");

const { User } = require("../../../database/models");
const { authService } = require("../../../services");
const { newUserMock } = require("../../mocks/user.mock");

describe("Auth service", function () {
  describe("Register", function () {
    afterEach(sinon.restore);

    describe("POST", function () {
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
  });
});
