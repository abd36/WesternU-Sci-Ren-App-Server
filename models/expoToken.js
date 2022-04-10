const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const ExpoTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    }
});

ExpoTokenSchema.plugin(uniqueValidator, {message: "{PATH} already exists."});
module.exports = mongoose.model("ExpoToken", ExpoTokenSchema);