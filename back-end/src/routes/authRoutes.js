const { Router } = require('express');

const authRoutes = Router();

authRoutes.get('/login');

module.exports = authRoutes;