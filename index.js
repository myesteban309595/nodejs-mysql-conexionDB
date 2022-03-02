const express = require('express')
const colors = require('colors');
//const { config } = require('dotenv');
const config = require('./config')
require('./db')

const PORT = config.module.PORT || 5000
const app = express();

app.use(express.json())


app.listen(PORT, () => {
    console.log(('escuchando en el puerto ' + PORT + ' ').inverse);
})

module.exports = app;