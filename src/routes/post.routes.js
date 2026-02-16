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
); /**
 *get /api/posts {protected}
 * getting user posts
 **/
postRouter.get("/", postController.getPostController);

/**
 * GET api/posts/details/:postid
 * return an details about specific post with the id .also check whether the post belongs to the user that is request come from
 */
postRouter.get("/details/:postId", postController.getPostDetailsController);
module.exports = postRouter;
