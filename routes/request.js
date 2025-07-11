const express = require("express");
const requestRouter = express.Router();

const { userAuth } = require("../middlewares/auth");
const {requestSend,requestView}=require('../controllers/requestContoller')
requestRouter.post(
  "/request/send/:status/:toUserId",
  userAuth,
  requestSend
);

requestRouter.post(
  "/request/review/:status/:requestId",
  userAuth,
  requestView
);

module.exports = requestRouter;
