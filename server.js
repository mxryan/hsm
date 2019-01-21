const express = require("express");
const path = require("path");
// const mongoose = require("mongoose");
// const db = require("./models");
const app = express();
const PORT = 8080;

// to do:

// db set up
// auth set up
// route set up

// if (process.env.MONGODB_URI) {
//   mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true
//   });
// } else {
//   mongoose.connect("mongodb://localhost/exercise_tracker", {
//     useNewUrlParser: true
//   });
// }

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
})


app.listen(PORT, ()=> console.log("server on"));