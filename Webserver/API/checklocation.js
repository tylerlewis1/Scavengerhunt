const { Console } = require('console');
const { json } = require('express');
const express = require('express');
const fs = require('fs');
const router = express.Router();
let datafile = null;
let currentdata = null;
let data = [];
let imagedata = [];
router.post("/", (req, res, next) =>{
    datafile = fs.readFileSync("./API/Data/teams.json");
    imagedatafile = fs.readFileSync("./API/Data/images.json");
    let currentdata = JSON.parse(datafile);
    let currentimagedata = JSON.parse(imagedatafile);
    //old data push
    for(i = 0; i < currentdata.length; i++){
        if(req.body.id != currentdata[i].teamid) {
            data.push({
                teamname: currentdata[i].teamname,
                players: currentdata[i].players,
                locfound: currentdata[i].locfound,
                teamid: currentdata[i].teamid,
                teamphoto: currentdata[i].teamphoto
            });
            imagedata.push({
                teamname: currentdata[i].teamname,
                teamid: currentdata[i].teamid,
                images: currentimagedata[i].images
            });
        } else{
            locationsfound = [];
            imagesdata = [];
            for(i1 = 0; i1 < currentdata[i].locfound.length; i1++){
                locationsfound.push(currentdata[i].locfound[i1]);
            }
            for(i2 = 0; i2 < currentimagedata[i].images.length; i2++){
                imagesdata.push(currentimagedata.images[i2]);
            }
            i
            locationsfound.push(req.body.locid);
            imagesdata.push(req.body.img);
            data.push({
                teamname: currentdata[i].teamname,
                players: currentdata[i].players,
                locfound: locationsfound,
                teamid: currentdata[i].teamid,
                teamphoto: currentdata[i].teamphoto
            });
            imagedata.push({
                teamname: currentdata[i].teamname,
                teamid: currentdata[i].teamid,
                images: imagesdata
            });
        }
    }
    // write data
    let stringjson = JSON.stringify(data, null, 2);
    let stringjson1 = JSON.stringify(imagedata, null, 2);
    fs.writeFileSync("./API/Data/teams.json", stringjson);
    fs.writeFileSync("./API/Data/images.json", stringjson1);
    data = [];
    imagedata = [];
    res.send("Done");
    res.status(200);
});
module.exports = router;