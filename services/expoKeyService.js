const ExpoKey = require("../models/expoKey")

// get all expo keys
exports.getAllExpoKeys = async (req, res) => {
    try {
        ExpoKey.find().then((expoKeys => {
            return res.status(200).send(expoKeys);
        }));
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

// save key
exports.saveExpoKey = async (req, res) => {
    try {
        const expoKey = new ExpoKey({
            key: req.body.key
        });

        expoKey.save().then(savedKey => {
            return res.status(201).json(savedKey);
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

// delete key by id
exports.deleteExpoKey = async (req, res) => {
    try {
        const id = req.body.id;
        let expoKey = await ExpoKey.findById(id);

        if (expoKey) {
            ExpoKey.findByIdAndDelete(id).then(() => {
                return res.status(204).send();
            });
        } else {
            return res.status(404).send(`Expo key with ID ${id} not found.`);
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}