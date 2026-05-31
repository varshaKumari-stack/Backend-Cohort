const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Username is already Exists "],
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    unique: [true, "EmailId is already Exists"],
    required: [true, "EmailId is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  bio:String,
  profileImg:{
    type:String,
    default:"https://ik.imagekit.io/cit2gmzcv/user.webp"
  }
});
const userModel=mongoose.model('users',userSchema)
module.exports=userModel