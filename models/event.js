const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: ""
  },
  time: {
    type: Date,
  },
  isStageShow: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("Event", EventSchema);