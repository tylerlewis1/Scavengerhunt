const express = require('express');
const router = express.Router();
const teams = require('./Data/teams.json');
const locations = require('./Data/locations.json');

router.get("/", (req, res, next) =>{
    let senddata = {
        teams,
        locations
    }
    res.send(senddata);
    res.status(200);
});

module.exports = router;