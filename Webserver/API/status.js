const express = require('express');
const router = express.Router();
router.get("/", (req, res, next) =>{
    res.send("Running");
    res.status(200);
});

module.exports = router;