const { Router } = require('express');
const { checkoutController } = require('../controllers');
const saleMiddleware = require('../middlewares/validate.sale');

const checkoutRoutes = Router();

checkoutRoutes.get('/checkout', checkoutController.checkoutControllerGet);
checkoutRoutes.post(
  '/orders',
  saleMiddleware,
  checkoutController.checkoutControllerPost,
);
checkoutRoutes.get('/orders/:id');

module.exports = checkoutRoutes;
