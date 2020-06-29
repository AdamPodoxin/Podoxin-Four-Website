const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  data: {
    type: String,
    required: true,
  },
});

module.exports = Event = mongoose.model("event", EventSchema);
