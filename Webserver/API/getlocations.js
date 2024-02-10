const express = require('express');
const fs = require('fs');
const router = express.Router();
let locations = null;
router.get("/", (req, res, next) =>{
    locations = fs.readFileSync('./API/Data/locations.json');
    res.send(JSON.parse(locations));
    locations = null;
    res.status(200);
});

module.exports = router;