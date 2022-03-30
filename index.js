const express = require('express');
require('dotenv').config();
const cors = require('cors');

const carsController = require('.controllers/car');

const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*' )
    app.use(cors());
    next();
})
const PORT = process.env.PORT || 3000;

app.get('/cars', carsController.getAllCars);

app.listen(PORT, () => console.log(`Executando na porta: ${PORT}`));
