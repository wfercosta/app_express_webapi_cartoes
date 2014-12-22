var express = require('express');
var app = express();


/*Inclsuão de rotas para a aplicação de cartões*/
var cartonistas = require('./routes/cartonistas');
app.use('/cartonistas', cartonistas);


module.exports = app;
