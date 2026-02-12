const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controllers");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
/**
 * post /api/posts {protected}
 * req.body(caption urlimg)
 *
 */
postRouter.post(
  "/",
  upload.single("image"),
  postController.createPostController,
);
module.exports = postRouter;
