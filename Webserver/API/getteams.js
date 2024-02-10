const express = require('express');
const router = express.Router();
let teams = null;
router.get("/", (req, res, next) =>{
    teams = require('./Data/teams.json');
    res.send(teams);
    teams = null;
    res.status(200);
});

module.exports = router;