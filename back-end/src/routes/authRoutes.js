const { Router } = require("express");
const loginControllerPost = require("../controllers/login.controllers")

const authRoutes = Router();
console.log('authRoutes')

authRoutes.post('/login', loginControllerPost.loginControllerPost);
authRoutes.post("/register", (req, res) => res.status(200).send("ok"));

module.exports = authRoutes;
