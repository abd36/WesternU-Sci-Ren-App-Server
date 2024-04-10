
const Faq = require("../models/faq");

// get all event
exports.getAllFaq = async (req, res) => {
  try {
    Faq.find().then((faq => {
      return res.status(200).send(faq);
    }));
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

// create event
exports.createFaq = async (req, res) => {
  try {
    const { question, answer } = req.body;

    const faq = new Faq({
      question: question,
      answer: answer,
    });

    faq.save().then(faqEvent => {
      return res.status(201).json(faqEvent);
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

// delete event by id
exports.deleteFaq = async (req, res) => {
  try {
    const { id } = req.body;
    const faq = await Faq.findById(id);

    if (faq) {
      Faq.findByIdAndDelete(id).then(() => {
        return res.status(204).send();
      });
    } else {
      return res.status(404).send(`Expo token with ID ${id} not found.`);
    }

  } catch (error) {
    res.status(500).send(error.message);
  }
}