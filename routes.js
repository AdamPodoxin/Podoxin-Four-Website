const express = require("express");
const router = express.Router();

const Event = require("./EventSchema");

router.get("/", (req, res) => {
  Event.find().then((events) => {
    res.json(events);
  });
});

router.post("/", (req, res) => {
  const newItem = new Event({
    data: req.body.data,
    id: "customId",
  });

  Event.findOneAndDelete({ id: "customId" }, (err, doc) => {
    if (err) console.error(err);
    newItem.save().then((event) => {
      res.json(event);
    });
  });
});

module.exports = router;
