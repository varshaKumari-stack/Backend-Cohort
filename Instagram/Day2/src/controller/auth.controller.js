const userModel = require("../models/user.model");
const crypto = require("crypto");
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
        (isUserExists.email === email
          ? "User Exists With Email"
          : "User Exists With Username"),
    });
  }
  const hash = crypto.createHash("Sha256").update(password).digest("hex");
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
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );
  res.cookie("jwt_token", token);
  res.status(201).json({
    message: "user registered",
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      profileImg: user.profileImg,
    },
  });
}
async function loginController(req, res) {
  const { username, password, email } = req.body;
  const user = await userModel.findOne({
    $or: [{ email: email }, { username: username }],
  });
  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }
  const hash = crypto.createHash("Sha256").update(password).digest("hex");
  const isPassword = hash === user.password;
  if (!isPassword) {
    return res.status(401).json({
      message: "Password Incorrect",
    });
  }
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );
  res.cookie("jwt_token", token);
  res.status(200).json({
    message: "user logged in",
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      profileImg: user.profileImg,
    },
  });
}
module.exports = {
  registerController,
  loginController,
};
