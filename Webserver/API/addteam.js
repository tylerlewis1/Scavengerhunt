const { Console } = require('console');
const { json } = require('express');
const express = require('express');
const fs = require('fs');
const router = express.Router();
let datafile = null;
let currentdata = null;
let data = [];

router.post("/", (req, res, next) =>{
    datafile = fs.readFileSync("./API/Data/teams.json");
    let currentdata = JSON.parse(datafile);
    //old data push
    for(i = 0; i < currentdata.length; i++){
         data.push({
            teamname: currentdata[i].teamname,
            players: currentdata[i].players,
            locfound: currentdata[i].locfound,
            teamid: currentdata[i].teamid,
            teamphoto: currentdata[i].teamphoto
         });
    }
    //new data push
    data.push({
        teamname: req.body.teamname,
        players: req.body.players,
        locfound: [],
        teamid: (currentdata.length + 1),
        teamphoto: req.body.teamphoto
     });
    // write data
    let stringjson = JSON.stringify(data, null, 2);
    fs.writeFileSync("./API/Data/teams.json", stringjson);
    data = [];
    res.send("Done");
    res.status(200);
});
module.exports = router;