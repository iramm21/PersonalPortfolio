module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define("Service", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    icon: {
      type: DataTypes.STRING,
    },
  });

  Service.associate = (models) => {
    Service.belongsToMany(models.Category, { through: "ServiceCategories" });
  };

  return Service;
};
