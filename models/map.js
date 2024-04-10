const mongoose = require("mongoose");

const MapSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Map", MapSchema);