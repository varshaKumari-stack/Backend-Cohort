const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "username is already exist"],
    required: [true, "username is required"],
  },
  email: {
    type: String,
    unique: [true, "email is already exists"],
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  bio: String,
  profileImg: {
    type: String,
    default:
      "https://ik.imagekit.io/cit2gmzcv/user.webp?updatedAt=1780211314340",
  },
});
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
