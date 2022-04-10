const { Expo } = require('expo-server-sdk')
const ExpoKey = require("../models/expoToken");
const Message = require("../models/message");

// Create a new Expo SDK client
// optionally providing an access token if you have enabled push security
// let expo = new Expo({ accessToken: process.env.EXPO_ACCESS_TOKEN });
let expo = new Expo();

// send a notification to all phones
exports.sendMessageToAllPhones = async (req, res) => {
    try {
        let tokens = await getAllExpoTokens();
        // console.log(tokens);

        let messages = createMessages(tokens, req);
        // console.log(messages);

        let chunks = expo.chunkPushNotifications(messages);
        // console.log(chunks);

        let tickets = [];
        for (let chunk of chunks) {
            let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
            tickets.push(...ticketChunk);
        }
        // console.log(tickets);

        res.status(200).json(tickets);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getAllExpoTokens() {
    let tokens = [];

    await ExpoKey.find().then(expoTokens => {
        for (let expoToken of expoTokens) {
            tokens.push(expoToken.token);
        }
    });

    return tokens;
}

function createMessages(tokens, req) {
    let messages = [];

    // can be cleaned up I think with an array function? map?
    for (let token of tokens) {
        messages.push({
            to: token,
            sound: req.body.sound,
            title: req.body.title,
            body: req.body.body
        });
    }

    return messages;
}