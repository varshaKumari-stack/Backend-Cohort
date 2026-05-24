const mongoose = require("mongoose");
function ConnectToDB() {
  mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connect to db");
  });
}
module.exports = ConnectToDB;
