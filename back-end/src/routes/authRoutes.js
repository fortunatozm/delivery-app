const { Router } = require("express");
const { loginControllerPost } = require("../controllers/login.controllers")

const authRoutes = Router();

authRoutes.post("/login", loginControllerPost);
authRoutes.post("/register", (req, res) => res.status(200).send("ok"));

module.exports = authRoutes;
