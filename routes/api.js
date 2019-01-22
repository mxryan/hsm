const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/user", (req, res) => {
  res.send("hit user GET");
});

router.post("/user", (req, res) => {
  res.send("hit user POST");
});

module.exports = router;