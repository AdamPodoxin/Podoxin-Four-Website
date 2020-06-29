const express = require("express");
const router = express.Router();

const Event = require("models/Event.js");

router.get("/", (req, res) => {
  Event.find().then((item) => console.log(item));
});

module.exports = router;
