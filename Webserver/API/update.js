const express = require('express');
const router = express.Router();
router.get("/", (req, res, next) =>{
    teams = fs.readFileSync('./API/Data/teams.json');
    locations = fs.readFileSync('./API/Data/locations.json');
    teams = JSON.parse(teams);
    locations = JSON.parse(locations);
    let senddata = {
        teams,
        locations
    }
    res.send(senddata);
    res.status(200);
});

module.exports = router;