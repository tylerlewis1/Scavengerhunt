const { Console } = require('console');
const { json } = require('express');
const express = require('express');
const fs = require('fs');
const router = express.Router();
let datafile = null;
let currentdata = null;
let data = [];

router.post("/", (req, res, next) =>{
    datafile = fs.readFileSync("./API/Data/locations.json");
    let currentdata = JSON.parse(datafile);
    //old data push
    for(i = 0; i < currentdata.length; i++){
         console.log(currentdata[i].name);
         data.push({
            name: currentdata[i].name,
            pictureurl: currentdata[i].pictureurl,
            id: currentdata[i].id
         });
    }
    //new data push
    data.push({
        name: req.body.name,
        pictureurl: req.body.url,
        id: Math.floor(Math.random() * 100000)
     });
    // write data
    let stringjson = JSON.stringify(data, null, 2);
    fs.writeFileSync("./API/Data/locations.json", stringjson);
    data = [];
    res.send("Done");
    res.status(200);
});
module.exports = router;