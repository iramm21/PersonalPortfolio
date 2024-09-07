const express = require("express");
const router = express.Router();
const db = require("../models");

// POST: Create a category
router.post("/", async (req, res) => {
  try {
    const newCategory = await db.Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Retrieve all categories
router.get("/", async (req, res) => {
  try {
    const categories = await db.Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
