const express = require("express");
const authController = require("../controllers/auth.controllers");
const authRouter = express.Router();

const identifyUser = require("../middlewares/auth.middleware");

authRouter.post("/register", authController.registerController);

authRouter.post("/login", authController.loginController);
/** @route GET /apia/auth/getme
 * @description get the current login information
 * @access private
 */
authRouter.get("/get-me", identifyUser, authController.getMeController);
module.exports = authRouter;
