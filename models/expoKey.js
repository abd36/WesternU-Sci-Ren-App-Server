const mongoose = require('mongoose');

const ExpoKeySchema = new mongoose.Schema({
    key: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("ExpoKey", ExpoKeySchema);