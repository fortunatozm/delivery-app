const { Router } = require('express');
const { authController } = require('../controllers');
const { salesController } = require('../controllers');

const authRoutes = Router();

authRoutes.post('/login', authController.loginControllerPost);
authRoutes.post('/register', authController.registerControllerPost);
authRoutes.get('/me', authController.userDataGet);
authRoutes.get('/pedidos', salesController.salesControllerByUserId);

module.exports = authRoutes;
