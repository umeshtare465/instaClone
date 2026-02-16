const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { model } = require("mongoose");
async function registerController(req, res) {
  const { username, email, password, bio, profileImage } = req.body;

  //   const isUserExistByEmail = await userModel.findOne({ email });
  //   if (isUserExistByEmail) {
  //     return res.status(409).json({
  //       messwge: "user already exists with same email",
  //     });
  //   }
  //   const isUserExistByusername = await userModel.findOne({ username });
  //   if (isUserExistByEmail) {
  //     return res.status(409).json({
  //       messwge: "user already exists with same username",
  //     });
  //   }

  const isUserAlreadyExist = await userModel.findOne({
    $or: [{ username }, { email }],
  });
  if (isUserAlreadyExist) {
    return res.status(409).json({
      message:
        "user already exist" +
        (isUserAlreadyExist.email == email
          ? "email already exists "
          : "username is already exist"),
    });
  }
  const hash = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    username,
    email,
    bio,
    profileImage,
    password: hash,
  });
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_KEY,
    { expiresIn: "1d" },
  );
  res.cookie("token", token);
  res.status(201).json({
    message: "user register successfully",
    user: {
      email: user.email,
      username: user.usermae,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}
async function loginController(req, res) {
  const { email, username, password } = req.body;
  // email or password
  // username or password
  const user = await userModel.findOne({
    $or: [
      //condition1
      { username },
      //   condition2
      { email },
    ],
  });
  if (!user) {
    return res.status(404).json({
      messege: "users not found",
    });
  }

  const isPasswordMatched = await bcrypt.compare(password, user.password);
  if (!isPasswordMatched) {
    return res.status(401).json({
      messege: "password invalid",
    });
  }
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_KEY,
    { expiresIn: "1d" },
  );
  res.cookie("token", token);
  res.status(201).json({
    message: "user login successfully",
    user: {
      email: user.email,
      username: user.usermae,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}
module.exports = { registerController, loginController };
