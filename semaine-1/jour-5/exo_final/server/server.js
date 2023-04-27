require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3030;
const students = require('./data/data.js');
const utils = require('./utils.js');

app.use(cors());

app.get('/users', (req, res) => {
    res.json(students);
});

app.listen(port, () => {
    console.log(`App running on port :${port}`);
});