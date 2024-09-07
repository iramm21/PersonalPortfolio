const express = require("express");
const router = express.Router();
const db = require("../models");

// POST: Create a service and associate categories
router.post("/", async (req, res) => {
  const { name, description, icon, categories } = req.body;

  try {
    // Step 1: Create the service
    const newService = await db.Service.create({
      name,
      description,
      icon,
    });

    // Step 2: Associate categories (if any)
    if (categories && categories.length > 0) {
      // Fetch categories from the database
      const categoryRecords = await db.Category.findAll({
        where: {
          name: categories, // Ensure these category names exist in DB
        },
      });

      // Check if categories are found
      if (categoryRecords.length > 0) {
        // Associate the found categories with the new service
        await newService.addCategories(categoryRecords);
      } else {
        return res.status(400).json({ error: "No matching categories found." });
      }
    }

    // Step 3: Re-fetch the service with its associated categories
    const serviceWithCategories = await db.Service.findOne({
      where: { id: newService.id },
      include: db.Category, // Include the categories in the response
    });

    // Step 4: Send the service with categories in the response
    res.status(201).json(serviceWithCategories);
  } catch (error) {
    console.error("Error creating service:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// GET: Retrieve all services
router.get("/", async (req, res) => {
  try {
    const services = await db.Service.findAll({
      include: [db.Category], // Include associated categories
    });
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
