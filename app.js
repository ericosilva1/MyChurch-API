require('dotenv').config();
const connect = require('./configs/db.config')
connect();
// packages
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', require('./routes/auth.routes'));

app.use(require('./middlewares/auth.middleware'));

app.use('/children', require('./routes/child.routes'));



app.listen(process.env.PORT, () => {
    console.log('Server listening on port ' + process.env.PORT)
})