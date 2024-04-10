
const Map = require("../models/map");

// get map
exports.getMap = async (req, res) => {
  try {
    Map.findOne().then((map => { return res.status(200).send(map); }));
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

// create map
exports.createMap = async (req, res) => {
  try {
    const { url } = req.body;

    const map = new Map({
      url: url
    });
    
    map.save().then(savedMap => {
      return res.status(201).json(savedMap);
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

// delete map
exports.deleteMap = async (req, res) => {
  try {
      Map.deleteOne().then(() => {
        return res.status(204).send();
      });
  }
  catch (error) {
    res.status(500).send(error.message);
  }
}