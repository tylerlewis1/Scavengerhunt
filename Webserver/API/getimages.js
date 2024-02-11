const express = require('express');
const fs = require('fs');
const router = express.Router();
let images = null;
router.get("/", (req, res, next) =>{
    images = fs.readFileSync('./API/Data/images.json');
    res.send(JSON.parse(images));
    images = null;
    res.status(200);
});

module.exports = router;