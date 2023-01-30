const { Router } = require('express');
const authRoutes = require('./authRoutes');
const productRoutes = require('./product.routes');
const checkoutRoutes = require('./checkout.routes');

const routes = Router();

routes.use('/', authRoutes);
routes.use('/products', productRoutes);
routes.use('/customer', checkoutRoutes);

module.exports = routes;
