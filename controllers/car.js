const { getAll } = require('../services/car');

const getAllCars = async (_req, res) => {
  try {
    const cars = await getAll.findAll();
    if(!cars) res.status(200).json(cars);
  } catch (error) {
  }
};

module.exports = { getAllCars };