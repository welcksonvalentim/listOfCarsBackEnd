const { Car } = require('../models');

const getAllCars = async (_req, res) => {
  try {
    const cars = await Car.findAll();
    res.status(200).json(cars);
  } catch (error) {
    res.status(404).json({ message: 'Not Fount Cars'});
  }
};

module.exports = { getAllCars };