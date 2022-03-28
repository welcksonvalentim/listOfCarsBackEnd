const Car = (sequelize, DataTypes) => {
  const Car = sequelize.define("Car", {
    automaker: DataTypes.STRING,
    model: DataTypes.STRING,
    version: DataTypes.STRING,
    image: DataTypes.VARCHAR
  });
  return Car;
};

module.exports = Car;