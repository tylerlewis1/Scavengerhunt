const express = require('express');
const fs = require('fs');
const router = express.Router();
router.get("/", (req, res, next) =>{
    teams = fs.readFileSync('./API/Data/teams.json');
    locations = fs.readFileSync('./API/Data/locations.json');
    images = fs.readFileSync('./API/Data/images.json');
    teams = JSON.parse(teams);
    locations = JSON.parse(locations);
    images = JSON.parse(images);
    let senddata = {
        teams,
        locations,
        images
    }
    res.send(senddata);
    res.status(200);
});

module.exports = router;