const express = require("express");
const ExpoNotificationService = require("../services/expoNotificationService")
const expoNotificationRouter = express.Router();

// send notification to all phones
expoNotificationRouter.put("/", ExpoNotificationService.sendMessageToAllPhones);

module.exports = expoNotificationRouter;