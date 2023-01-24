const { Router } = require('express');
const { loginController, registerController, productsController } = require('../controllers');

const authRoutes = Router();
console.log('authRoutes')

authRoutes.post('/login', loginController.loginControllerPost);
authRoutes.post('/register', registerController.registerControllerPost);
authRoutes.get('/products', productsController.productsControllerGet);

module.exports = authRoutes;
