const { Car } = require('../models');

const getAll = async () => {
  const cars = await Car.findAll();
  return cars;
};

module.exports = { getAll };