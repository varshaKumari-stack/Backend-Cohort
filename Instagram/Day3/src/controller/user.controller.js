const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
async function registerController(req, res) {
  const { username, email, password, bio, profileImg } = req.body;
  const isUserExists = await userModel.findOne({
    $or: [{ email }, { username }],
  });
  if (isUserExists) {
    return res.status(409).json({
      message:
        "User Already Exists" +
        (isUserExists.email === email ? "With EmailId" : "With Username"),
    });
  }
  const hash = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    username,
    email,
    password: hash,
    bio,
    profileImg,
  });
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.jwt_token,
    { expiresIn: "1d" },
  );
  res.cookie("token", token);
  res.status(201).json({
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,

      profileImg: user.profileImg,
    },
  });
}
async function loginController(req, res) {
  const { username, email, password } = req.body;
  const user = await userModel.findOne({
    $or: [{ email }, { username }],
  });
  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }
  const isPassword = await bcrypt.compare(password, user.password);
  if (!isPassword) {
    return res.status(404).json({
      message: "Invalid Password",
    });
  }
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.jwt_token,
    { expiresIn: "1d" },
  );
  res.cookie("token", token);
  res.status(200).json({
    message: "user logged in",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,

      profileImg: user.profileImg,
    },
  });
}
module.exports = {
  registerController,
  loginController,
};
