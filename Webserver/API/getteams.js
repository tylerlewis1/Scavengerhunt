const express = require('express');
const fs = require('fs');
const router = express.Router();
let teams = null;
router.get("/", (req, res, next) =>{
    teams = fs.readFileSync('./API/Data/teams.json');
    res.send(JSON.parse(teams));
    teams = null;
    res.status(200);
});

module.exports = router;