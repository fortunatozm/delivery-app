const { expect } = require("chai");
const sinon = require("sinon");

const { Product } = require("../../../database/models");
const { productService } = require("../../../services");
const { productsMock } = require("../../mocks/product.mock");

describe("Product service", function () {
  afterEach(sinon.restore);

  describe("GET", function () {
    it("Retorna todos os produtos", async function () {
      sinon.stub(Product, "findAll").resolves(productsMock);

      const result = await productService.productServiceGet();

      const expected = { status: 200, message: productsMock };

      expect(result).to.deep.equal(expected);
    });
  });
});
