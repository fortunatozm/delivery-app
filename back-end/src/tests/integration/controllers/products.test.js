const chai = require("chai");
const sinon = require("sinon");

chai.use(require("chai-http"));
chai.use(require("sinon-chai"));
const { expect } = chai;

const { productsController } = require("../../../controllers");
const { productService } = require("../../../services");
const { productsMock } = require("../../mocks/product.mock");

describe("Products controller", function () {
  afterEach(sinon.restore);

  describe("GET", function () {
    it("Retorna todos os produtos com sucesso", async function () {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productService, "productServiceGet")
        .resolves({ status: 200, message: productsMock });

      await productsController.productsControllerGet(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productsMock);
    });
  });
});
