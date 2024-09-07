const express = require("express");
const router = express.Router();
const db = require("../models");

// POST: Create a new project
router.post("/", async (req, res) => {
  const {
    title,
    description,
    long_description,
    technologies,
    github_link,
    live_link,
    categories,
    images,
  } = req.body;

  try {
    const newProject = await db.Project.create({
      title,
      description,
      long_description,
      technologies,
      github_link,
      live_link,
      images,
    });

    if (categories && categories.length > 0) {
      const categoryRecords = await db.Category.findAll({
        where: { name: categories },
      });
      await newProject.addCategories(categoryRecords);
    }

    const projectWithCategories = await db.Project.findOne({
      where: { id: newProject.id },
      include: db.Category,
    });

    res.status(201).json(projectWithCategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Retrieve all projects
router.get("/", async (req, res) => {
  try {
    const projects = await db.Project.findAll({
      include: [db.Category], // Include associated categories
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Get all projects with the "featured" category
router.get("/featured", async (req, res) => {
  try {
    const featuredProjects = await db.Project.findAll({
      include: {
        model: db.Category,
        where: { name: "Featured" }, // Ensure you're using the correct category name
      },
      limit: 6, // Limit the number of featured projects
    });

    res.json(featuredProjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Retrieve single project by ID
router.get("/:id", async (req, res) => {
  try {
    const project = await db.Project.findByPk(req.params.id, {
      include: ["Categories"],
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
