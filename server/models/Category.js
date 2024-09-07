module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  Category.associate = (models) => {
    Category.belongsToMany(models.Project, { through: "ProjectCategories" });
    Category.belongsToMany(models.Service, { through: "ServiceCategories" });
  };

  return Category;
};
