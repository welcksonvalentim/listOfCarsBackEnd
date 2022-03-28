const { Car } = require('../models');

const getAllCars = async (_req, res) => {
  const cars = await Car.findAll();
  res.status(200).json(cars);
};

module.exports = { getAllCars };