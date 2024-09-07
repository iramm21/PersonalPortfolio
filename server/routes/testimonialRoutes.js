const express = require("express");
const router = express.Router();
const db = require("../models");

// POST: Create a testimonial
router.post("/", async (req, res) => {
  try {
    console.log(req.body); // Log the request body to ensure it's correct
    const newTestimonial = await db.Testimonial.create(req.body);
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Retrieve all testimonials
router.get("/", async (req, res) => {
  try {
    const testimonials = await db.Testimonial.findAll();
    console.log(testimonials); // Log the testimonials to debug
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
