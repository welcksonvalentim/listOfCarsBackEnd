const Car = (sequelize, DataTypes) => {
  const Car = sequelize.define("Car", {
    automaker: DataTypes.STRING,
    model: DataTypes.STRING,
    version: DataTypes.STRING,
    image: DataTypes.STRING,
    info: DataTypes.STRING
  },
  {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};

module.exports = Car;