const express = require('express');
const router = express.Router();
const teams = require('./Data/teams.json');
router.get("/", (req, res, next) =>{
    res.send(teams);
    res.status(200);
});

module.exports = router;