const express = require("express");
const ExpoKey = require("../models/expoKey");
const ExpoKeyService = require("../services/expoKeyService")
const expoKeyRouter = express.Router();

// get all keys
expoKeyRouter.get("/", ExpoKeyService.getAllExpoKeys);

// save key
expoKeyRouter.post("/", ExpoKeyService.saveExpoKey);

// delete key by id
expoKeyRouter.delete("/", ExpoKeyService.deleteExpoKey);

module.exports = expoKeyRouter;