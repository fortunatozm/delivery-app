const { Router } = require('express');
const authRoutes = require('./authRoutes');

const routes = Router();

routes.use('/auth', authRoutes);

export default routes;
