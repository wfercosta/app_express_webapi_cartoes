var express = require('express');
var app = express();


/*Inclsuão de rotas para a aplicação de cartões*/
var cartonistas = require('./routes/cartonistas');
app.use('/cartonistas', cartonistas);

app.set("view engine", "ejs");
app.get('/display', function (request, response){

  var elementos = [];

  Object.keys(cartonistas).forEach(function(key) {
    elementos.push(cartonistas[key]);
  });

  response.render("display", {
       cartonistas: elementos
  });   

});

module.exports = app;
