var express = require('express');
var router = express.Router();
var device = require('express-device');
const path = require('path');
router.use(device.capture());

// Entregando o arquivo
router.get('/', function(req, res){
    let deviceReq = req.device.type
    if (deviceReq=="desktop") {
      res.sendFile('index.html' , { root : "public"});
    } else {
      res.sendFile('html/mobile.html' , { root : "public"});
    }
    console.log("Acesso a LandPage")
    console.log(deviceReq)    
})
// Exportando a rota pro middleware
module.exports = router;