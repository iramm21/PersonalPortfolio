// models/Project.js
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("Project", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    long_description: {
      type: DataTypes.TEXT, // For detailed descriptions
    },
    technologies: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    github_link: {
      type: DataTypes.STRING,
    },
    live_link: {
      type: DataTypes.STRING,
    },
    images: {
      type: DataTypes.JSON, // Array of image URLs
      defaultValue: [],
    },
  });

  Project.associate = (models) => {
    Project.belongsToMany(models.Category, { through: "ProjectCategories" });
  };

  return Project;
};
