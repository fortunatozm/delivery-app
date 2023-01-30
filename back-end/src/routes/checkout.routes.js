const { Router } = require('express');
const { checkoutController } = require('../controllers');

const checkoutRoutes = Router();

checkoutRoutes.get('/checkout', checkoutController.checkoutControllerGet);

module.exports = checkoutRoutes;
