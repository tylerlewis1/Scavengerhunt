const { Console } = require('console');
const { json } = require('express');
const express = require('express');
const fs = require('fs');
const router = express.Router();

router.post("/", (req, res, next) =>{
    gamefile = fs.readFileSync("./API/Data/game.json");
    let gamedata = JSON.parse(gamefile);
    data = [];
    //old data push
    for(i = 0; i < gamedata.length; i++){
         data.push(gamedata[i]);
    }
    //new data push
    data.push(req.body.id);
    //send game placment
    res.send(String(gamedata.length + 1));
    // write data
    let newgamedatastring = JSON.stringify(data, null, 2);
    fs.writeFileSync("./API/Data/game.json", newgamedatastring);
    data = [];
    res.status(200);
});
//reset game
router.get("/", (req, res, next) =>{
    reset = [];
    let resetdata = JSON.stringify(reset, null, 2);
    fs.writeFileSync("./API/Data/game.json", newgamedatastring);
    res.send("Done");
    res.status(200);
});
module.exports = router;