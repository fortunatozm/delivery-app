const { Router } = require('express');
const authRoutes = require('./authRoutes');
const productRoutes = require('./product.routes');

const routes = Router();
routes.use('/auth', authRoutes);
routes.use('/products', productRoutes);

module.exports = routes;
