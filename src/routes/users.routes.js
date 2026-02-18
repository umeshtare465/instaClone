const express = require("express");
const userconstroller = require("../controllers/users.controllers");
const identifyuser = require("../middlewares/auth.middleware");
const userRouter = express.Router();
/**
 * @route post api/users /follow /:userid
 * @description follow a user
 * @assess private
 */
userRouter.post(
  "/follow/:username",
  identifyuser,
  userconstroller.followuserconstroller,
); /**
 * @route post api/users /unfollow /:userid
 * @description unfollow a user
 * @assess private
 */
userRouter.post(
  "/unfollow/:username",
  identifyuser,
  userconstroller.unfollowUserController,
);
module.exports = userRouter;
