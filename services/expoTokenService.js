const ExpoToken = require("../models/expoToken");
const { Expo } = require('expo-server-sdk')

// get all expo keys
exports.getAllExpoTokens = async (req, res) => {
    try {
        ExpoToken.find().then((expoKeys => {
            return res.status(200).send(expoKeys);
        }));
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

// save keys
exports.saveExpoToken = async (req, res) => {
    try {
        const token = req.body.token;

        // validate the token
        if (!Expo.isExpoPushToken(token)) {
            return res.status(400).send(`Push token ${token} is not a valid Expo push token`)
        }

        ExpoToken.findOne({ token: token }).then(existingToken => {
            if (existingToken) {
                return res.status(200).json(existingToken);
            } else {
                const expoToken = new ExpoToken({
                    token: token
                });
        
                expoToken.save().then(savedToken => {
                    return res.status(201).json(savedToken);
                });
            }
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

// delete key by id
exports.deleteExpoToken = async (req, res) => {
    try {
        const id = req.body.id;
        let expoToken = await ExpoToken.findById(id);

        if (expoToken) {
            ExpoToken.findByIdAndDelete(id).then(() => {
                return res.status(204).send();
            });
        } else {
            return res.status(404).send(`Expo token with ID ${id} not found.`);
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}