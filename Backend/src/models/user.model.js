const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "user name is already exist"],
    required: [true, "user name is required"],
  },
  email: {
    type: String,
    unique: [true, "email is already exist"],
    required: [true, "email is required"],
  },
  password: {
    type: String,

    required: [true, "password is required"],
  },
  bio: String,
  profileImage: {
    type: String,
    default:
      "https://ik.imagekit.io/ob6xwyhiu/avatar-default-user-profile-icon-social-media-vector-57234208.webp",
  },
});
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
