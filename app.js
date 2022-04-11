require('dotenv').config();
const connect = require('./configs/db.config')
connect();
// packages
const express = require('express');
const cors = require('cors');

const app = express();

app.listen(process.env.PORT, () => {
    console.log('Server listening on port ' + process.env.PORT)
})