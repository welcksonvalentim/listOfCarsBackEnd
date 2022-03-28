const express = require('express');
require('dotenv').config();
const carsController = require('.controller/cars');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/cars', carsController);
app.listen(PORT, () => console.log(`Executando na porta: ${PORT}`));
