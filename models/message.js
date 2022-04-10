const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    to: { type: [String], required: true },
    title: String,
    body: String,
    sound: {type: String, default: "default"},
    data: Object,
    ttl: Number,
    categoryId: String
});

module.exports = mongoose.model("Message", MessageSchema);