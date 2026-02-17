const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "test",
    folder: "cohort2-insta-clone-posts",
  });
  const post = await postModel.create({
    caption: req.body.caption,
    imgurl: file.url,
    user: req.user.id,
  });
  res.status(201).json({
    messege: "new post created",
    post,
  });
}

async function getPostController(req, res) {
  const userId = req.user.id;
  const posts = await postModel.find({ user: userId });
  res.status(200).json({
    messege: "token is valid",
    posts,
  });
}

async function getPostDetailsController(req, res) {
  const userId = req.user.id;
  const postId = req.params.postId;
  const post = await postModel.findById(postId);
  if (!post) {
    return res.status(404).json({
      messege: "post not found",
    });
  }
  const isValidUser = post.user.toString() === userId;
  if (!isValidUser) {
    return res.status(403).json({
      messege: "forbridden content",
    });
  }
  return res.status(200).json({
    messege: "post fetched successfully",
    post,
  });
}
module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
};
