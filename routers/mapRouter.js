const express = require("express");
const MapService = require("../services/mapService")
const mapRouter = express.Router();

// get map
mapRouter.get("/", MapService.getMap);

// save map
mapRouter.post("/", MapService.createMap);

// delete map
mapRouter.delete("/", MapService.deleteMap);

module.exports = mapRouter;