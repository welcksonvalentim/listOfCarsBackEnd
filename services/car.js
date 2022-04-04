const { Car } = require('../models');

const AllCars = async () => {
  try {
    const cars = await Car.findAll();
    const getCars = (cars.length > 1) && cars;
    if (!getCars) return getCars;
  } catch (error) {
    return error;
  }
};

module.exports = { AllCars };
