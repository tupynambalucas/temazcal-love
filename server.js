var express = require('express');

// cors pro futuro
// var cors = require('cors');
const favicon = require('express-favicon');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()



// Declarando a pasta dos arquivos estáticos 
// Pra receber informações do cliente tipo formulários essas porra
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
// Usando a rota da landpage e declarando ela ("/")
var land = require('./routes/land')
app.use('/', land)

var eventos = require('./routes/eventos')
app.use('/eventos', eventos)

app.use(express.static('public'));

app.listen(process.env.PORT, () => console.log(`OUOOOOUUUUUUU estou rodando na porta: ${process.env.PORT}`));