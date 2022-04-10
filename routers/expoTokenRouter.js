const express = require("express");
const ExpoTokenService = require("../services/expoTokenService")
const expoTokenRouter = express.Router();

// get all keys
expoTokenRouter.get("/", ExpoTokenService.getAllExpoTokens);

// save key
expoTokenRouter.post("/", ExpoTokenService.saveExpoToken);

// delete key by id
expoTokenRouter.delete("/", ExpoTokenService.deleteExpoToken);

module.exports = expoTokenRouter;