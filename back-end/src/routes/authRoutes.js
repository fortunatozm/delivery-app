const { Router } = require('express');
const { loginController, registerController } = require('../controllers');

const authRoutes = Router();
console.log('authRoutes');

authRoutes.post('/login', loginController.loginControllerPost);
authRoutes.post('/register', registerController.registerControllerPost);

module.exports = authRoutes;
