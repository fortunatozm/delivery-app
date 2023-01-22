const { Router } = require('express');
const { loginControllerPost } = require('../controllers/login.controllers');
const {
  registerControllerPost,
} = require('../controllers/register.controllers');

const authRoutes = Router();

authRoutes.post('/login', loginControllerPost);
authRoutes.post('/register', registerControllerPost);

module.exports = authRoutes;
