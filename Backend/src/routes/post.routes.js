const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controllers");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require("../middlewares/auth.middleware");
/**
 * @routes post /api/posts {protected}
 * @description req.body(caption urlimg)
 *
 */
postRouter.post(
  "/",
  identifyUser,
  upload.single("image"),
  postController.createPostController,
); /**
 *@routes get /api/posts {protected}
 *@description getting user posts
 **/
postRouter.get("/", identifyUser, postController.getPostController);

/**
 * GET api/posts/details/:postid
 * return an details about specific post with the id .also check whether the post belongs to the user that is request come from
 */
postRouter.get(
  "/details/:postId",
  identifyUser,
  postController.getPostDetailsController,
);
/**
 * @routes post /api/posts/like/:postID
 * @description like user post
 */
postRouter.post(
  "/like/:postId",
  identifyUser,
  postController.likePostController,
);
module.exports = postRouter;
