module.exports = (sequelize, DataTypes) => {
  const Testimonial = sequelize.define("Testimonial", {
    client_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    feedback: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    client_position: {
      type: DataTypes.STRING,
    },
    client_image: {
      type: DataTypes.STRING(2048),
    },
  });

  return Testimonial;
};
