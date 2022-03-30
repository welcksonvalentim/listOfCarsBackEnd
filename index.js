const express = require('express');
require('dotenv').config();
const cors = require('cors');

const carsController = require('.controllers/car');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/cars', carsController.getAllCars);

app.listen(PORT, () => console.log(`Executando na porta: ${PORT}`));
