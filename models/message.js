const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    to: { type: [String], required: true },
    data: Object,
    title: String,
    body: String,
    ttl: Number,
    categoryId: String
});

module.exports = mongoose.model("Message", MessageSchema);