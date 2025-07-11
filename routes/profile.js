const express = require("express");
const profileRouter = express.Router();

const { userAuth } = require("../middlewares/auth");
const {viewProfile, editProfile} = require('../controllers/profileController')
profileRouter.get("/profile/view", userAuth,viewProfile );

profileRouter.patch("/profile/edit", userAuth,editProfile );

module.exports = profileRouter;
