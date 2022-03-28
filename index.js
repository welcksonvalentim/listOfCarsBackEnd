const express = require('express');
require('dotenv').config();

const carsController = require('.controllers/car');
const { getAllCars } = carsController;

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/cars', getAllCars);

app.listen(PORT, () => console.log(`Executando na porta: ${PORT}`));
