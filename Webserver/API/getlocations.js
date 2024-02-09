const express = require('express');
const router = express.Router();
const locations = require('./Data/locations.json');
router.get("/", (req, res, next) =>{
    res.send(locations);
    res.status(200);
});

module.exports = router;