const express = require("express");
const userRouter = express.Router();

const { userAuth } = require("../middlewares/auth");
const {userRequests,userConnections,feed}=require("../controllers/userContoller")


// Get all the pending connection request for the loggedIn user
userRouter.get("/user/requests/received", userAuth,userRequests );

userRouter.get("/user/connections", userAuth,userConnections );

userRouter.get("/feed", userAuth,feed);
module.exports = userRouter;
