const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Event = new Schema({
  data: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

module.exports = Event = mongoose.model("event", Event);
