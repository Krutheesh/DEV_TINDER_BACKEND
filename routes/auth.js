const express = require("express");
const authRouter = express.Router();
const { signUp, login, logout } = require("../controllers/authController");
authRouter.post("/signup", signUp);

authRouter.post("/login", login);

authRouter.post("/logout", logout);

module.exports = authRouter;
