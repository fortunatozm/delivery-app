const authService = require('./auth.services');
const productService = require('./products.services');
const getSalesbyUserId = require('./sales.service');
const checkoutService = require('./checkout.services');

module.exports = {
  authService,
  productService,
  getSalesbyUserId,
  checkoutService,
};
