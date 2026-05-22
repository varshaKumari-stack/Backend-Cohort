const express = require("express");
const catMe = require("cat-me");
const app = express(); //server create karna
console.log(catMe());
app.listen(3000, () => {
  console.log("Server Start with our port 3000"); //server start krna
});
