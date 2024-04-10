
const Event = require("../models/event");

// get all events
exports.getAllEvents = async (req, res) => {
  try {
    Event.find().then((events => {
      if (events.length > 1) {
        events.sort((a, b) => {
          return new Date(a.time) - new Date(b.time);
        });
      }
      return res.status(200).send(events);
    }));
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

// create event
exports.createEvent = async (req, res) => {
  try {
    const { title, description, dateString, isStageShow } = req.body;
    const time = new Date(dateString)

    const event = new Event({
      title: title,
      description: description,
      time: time,
      isStageShow: isStageShow
    });

    event.save().then(savedEvent => {
      return res.status(201).json(savedEvent);
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

// delete event by id
exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.body;
    const event = await Event.findById(id);

    if (event) {
      Event.findByIdAndDelete(id).then(() => {
        return res.status(204).send();
      });
    } else {
      return res.status(404).send(`Event with ID ${id} not found.`);
    }

  } catch (error) {
    res.status(500).send(error.message);
  }
}