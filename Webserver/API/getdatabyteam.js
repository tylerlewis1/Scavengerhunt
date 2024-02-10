const express = require('express');
const fs = require('fs');
const router = express.Router();
// let teams = null;
router.get("/", (req, res, next) =>{
    console.log(req.body);
    teams = fs.readFileSync('./API/Data/teams.json');
    for(i = 0; i < (JSON.parse(teams).length); i++){
        if(req.body.id == JSON.parse(teams)[i].teamid){
            res.send(JSON.parse(teams)[i]);
            res.status(200);
            return;
        }
    }
    res.send(404)
});

module.exports = router;