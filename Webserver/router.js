const express = require('express');
const cors = require('cors');
const status = require('./API/status');
const getlocations = require('./API/getlocations');
const getteams = require('./API/getteams');
const addlocation = require('./API/addlocation');
const gdbt = require('./API/getdatabyteam');
const check = require('./API/checklocation');
var rmteam = require('./API/rmteam');
const addteam = require('./API/addteam');
const update = require('./API/update');
var bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/status', status);
app.use('/update', update);
app.use('/getlocations', getlocations);
app.use('/getteams', getteams);
app.use('/addlocation', addlocation);
app.use('/addteam', addteam);
app.use('/rmteam', rmteam);
app.use('/gdbt', gdbt);
app.use('/check', check)
module.exports = app;