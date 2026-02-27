const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    dafault: "",
  },
  imgurl: {
    type: String,
    required: [true, "imgurl is required for creating post"],
  },
  user: {
    ref: "users",
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "user id is required for creating an post"],
  },
});
const postModel = mongoose.model("posts", postSchema);
module.exports = postModel;
