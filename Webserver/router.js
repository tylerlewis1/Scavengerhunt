const express = require('express');
const cors = require('cors');
const status = require('./API/status');
const app = express();
app.use(cors());
app.use('/status', status);
module.exports = app;