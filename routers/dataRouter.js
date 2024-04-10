const express = require("express");
const DataService = require("../services/dataService")
const dataRouter = express.Router();

// get all keys
dataRouter.get("/getAllEvents", DataService.getAllEvents);

// save key
dataRouter.post("/createEvent", DataService.createEvent);

// delete key by id
dataRouter.delete("/deleteEvent", DataService.deleteEvent);

module.exports = dataRouter;