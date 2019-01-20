const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

// to do:
// init sequelize
// db set up
// auth set up
// route set up

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
})


app.listen(PORT, ()=> console.log("server on"));