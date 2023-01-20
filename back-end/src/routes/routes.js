const { Router } = require('express');
const authRoutes = require('./authRoutes');

const routes = Router();

routes.use('/auth', authRoutes);

module.exports = routes;