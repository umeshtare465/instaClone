const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");
async function followuserconstroller(req, res) {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;
  if (followeeUsername == followerUsername) {
    return res.status(400).json({
      messege: "you cannot follow yourself",
    });
  }
  const isfolloweeExist = await userModel.findOne({
    username: followeeUsername,
  });
  if (!isfolloweeExist) {
    return res.status(404).json({
      messege: "followee is not exist",
    });
  }
  const isalreadyFollowing = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });
  if (isalreadyFollowing) {
    return res.status(200).json({
      messege: "you are already followed him",
    });
  }
  const followRecord = await followModel.create({
    follower: followerUsername,
    followee: followeeUsername,
  });
  res.status(201).json({
    messege: `YOu are are followinf ${followeeUsername}`,
    follow: followRecord,
  });
}

async function unfollowUserController(req, res) {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;
  const isUserFollowing = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });
  if (!isUserFollowing) {
    return res.status(200).json({
      messege: `you are not following ${followeeUsername}`,
    });
  }
  await followModel.findByIdAndDelete(isUserFollowing._id);
  res.status(200).json({
    messege: `you are unfollowing ${followeeUsername}`,
  });
}

module.exports = { followuserconstroller, unfollowUserController };
