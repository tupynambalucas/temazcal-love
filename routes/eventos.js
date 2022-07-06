var express = require('express');
var router = express.Router();
var device = require('express-device');
router.use(device.capture());
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


let ativado = 0
let valor = 0
// let dbpass = process.env.DB_PASS

// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb+srv://moonlabsNE:"+dbpass+"@cluster0.refzarr.mongodb.net/?retryWrites=true&w=majority";

// Entregando o arquivo
router.get('/', function(req, res){
    let deviceReq = req.device.type
    console.log("Acesso contato")
    if (deviceReq=="desktop") {
      res.sendFile('html/eventos.html' , { root : "public"});
    } else {
      res.sendFile('html/eventos.html' , { root : "public"});
    }
    console.log(deviceReq)    
})
router.post('/formpost', jsonParser, async (req, res) => {
  ativado = req.body.valor
})

router.get('/checkout', function(req, res){
  let deviceReq = req.device.type


  if (deviceReq=="desktop") {
    res.sendFile('html/checkout.html' , { root : "public"});
  } else {
    res.sendFile('html/checkout.html' , { root : "public"});
  }
  console.log(deviceReq)    
})

router.get('/status', function(req, res){
  let deviceReq = req.device.type
  if (deviceReq=="desktop") {
    res.sendFile('html/checkout-status.html' , { root : "public"});
  } else {
    res.sendFile('html/checkout-status.html' , { root : "public"});
  }
  console.log(deviceReq)    
})


router.get('/secret', async (req, res) => {
  if (ativado==0) {
    valor = 95
  }
  if (ativado==1) {
    valor = 125
  }
  if (ativado==2) {
    valor = 155
  }
  if (ativado==3) {
    valor = 185
  }
  console.log("valor é de "+valor)
  const intent = await stripe.paymentIntents.create({
    amount: valor,
    currency: 'BRL',
    payment_method_types: [
      'card',
    ],
  }); // ... Fetch or create the PaymentIntent
  res.json({client_secret: intent.client_secret});
});

// Exportando a rota 
module.exports = router;