const express = require('express');
const fs = require('fs');
const router = express.Router();
let teams = null;
let data = [];
router.get("/", (req, res, next) =>{
    teams = fs.readFileSync('./API/Data/teams.json');
    for(i = 0; i < teams.length; i++){
        data.push(teams[i]);
    }
    res.send(data);
    teams = null;
    res.status(200);
});

module.exports = router;