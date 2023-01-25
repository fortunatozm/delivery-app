const { Router } = require('express');
const authRoutes = require('./authRoutes');
const productRoutes = require('./product.routes');

const routes = Router();

routes.use('/', authRoutes);
routes.use('/products', productRoutes);

module.exports = routes;
