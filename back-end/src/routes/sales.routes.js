const { Router } = require('express');
const { salesController } = require('../controllers');
const saleMiddleware = require('../middlewares/validate.sale');

const salesRoutes = Router();

salesRoutes.get('/', saleMiddleware, salesController.salesControllerBySellerId);

module.exports = salesRoutes;
