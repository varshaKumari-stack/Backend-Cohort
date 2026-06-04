const postModel = require("../models/post.models");
const Imagekit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const imagekit = new Imagekit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});
async function createPostController(req, res) {
  console.log(req.body, req.file);
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: " token not provided,unauthorized access",
    });
  }
  const decode = jwt.verify(token, process.env.jwt_token);
  console.log(decode);
  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
  });
  res.send(file);
}
module.exports = {
  createPostController,
};
