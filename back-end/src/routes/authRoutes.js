const { Router } = require("express");

const authRoutes = Router();

authRoutes.get("/login");
authRoutes.post("/register", (req, res) => res.status(200).send("ok"));

module.exports = authRoutes;
