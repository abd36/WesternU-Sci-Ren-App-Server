const express = require("express");
const FaqService = require("../services/faqService")
const faqRouter = express.Router();

// get all Faq
faqRouter.get("/getAllFaq", FaqService.getAllFaq);

// createFaq
faqRouter.post("/createFaq", FaqService.createFaq);

// delete Faq by id
faqRouter.delete("/deleteFaq", FaqService.deleteFaq);

module.exports = faqRouter;