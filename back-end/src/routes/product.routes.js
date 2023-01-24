const { Router } = require('express');
const { productsController } = require('../controllers')

const productRoutes = Router();


productRoutes.get('/', productsController.productsControllerGet);

module.exports = productRoutes;