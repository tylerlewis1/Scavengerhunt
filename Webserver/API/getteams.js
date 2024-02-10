const express = require('express');
const router = express.Router();
let teams = require('./Data/teams.json');
router.get("/", (req, res, next) =>{
    teams = require('./Data/teams.json');
    res.send(teams);
    res.status(200);
});

module.exports = router;