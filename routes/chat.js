const express = require("express");
const chatRouter = express.Router();
const { userAuth } = require("../middlewares/auth");
chatRouter.get('/chat/:targetUserId', userAuth)

module.exports = chatRouter;
