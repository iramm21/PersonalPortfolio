require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

// Sync database and create tables
db.sequelize
  .sync({ alter: true })
  .then(() => console.log("Database & tables created!"))
  .catch((err) => console.log("Error syncing database:", err));

// Register routes
app.use("/categories", require("./routes/categoryRoutes"));
app.use("/projects", require("./routes/projectRoutes"));
app.use("/services", require("./routes/serviceRoutes"));
app.use("/testimonials", require("./routes/testimonialRoutes"));
app.use("/contact", require("./routes/contactRoute"));

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
