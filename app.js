var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.set("view engine", "ejs");

var cartonistas = { 
  "123456" : {id: 123456, nome: "Wander Fernando Costa", cartoes: ["1234.4567.8901.1234"]},
  "567890" : {id: 567890, nome: "Nelsinho Borges", cartoes: ["1234.4567.8901.0000"]},
}; 

var cartoes = {
  "1234.4567.8901.1234" : {number: "1234.4567.8901.1234", since: "09/04", valid: "08/21", segment: "VISA Platinum"}, 
  "1234.4567.8901.0000" : {number: "1234.4567.8901.0000", since: "09/04", valid: "08/21", segment: "VISA Platinum"} 
}

app.get('/display', function (request, response){

  var elementos = [];

  Object.keys(cartonistas).forEach(function(key) {
    elementos.push(cartonistas[key]);
  });

  response.render("display", {
       cartonistas: elementos
  });   

});

app.get('/cartonistas', function (request, response) {
  response.status(200).json(Object.keys(cartonistas));
});


app.get('/cartonistas/:id', function(request, response) {

  var registro = cartonistas[request.params.id];
  if(registro) response.status(200).json(registro);
  else response.sendStatus(404);  

});

app.post('/cartonistas', function(request, response) {
  var registro = request.body;  
  console.log(registro);
  cartonistas[registro.id]=registro;
  cartonistas[registro.id].cartoes=[];
  response.status(201).json(registro);
});

app.delete('/cartonistas/:id', function (request, response) {
  
  var registro = cartonistas[request.params.id];
  if (registro) {
    delete cartonistas[request.params.id];
    response.status(200).json(registro); 
  } else {
    response.sendStatus(404); 
  }

});

app.get('/cartonistas/:id/cartoes', function (request, response) {

  var cartonistaCartoes = [];
  var cartonista = cartonistas[request.params.id];

  if (cartonistas) {
    cartonista.cartoes.forEach(function(entry) {
      cartonistaCartoes.push(cartoes[entry]);
    });
  }
   
  response.status(200).json(cartonistaCartoes); 

});

app.post('/cartonistas/:id/cartoes', function (request, response) {

  var cartonista = cartonistas[request.params.id];

  if (cartonistas) {
   
     if (!cartonista.cartoes) cartonista.cartoes = [];
     
     var cartao = request.body;
     console.log("Inclusão de cartões: " + cartao); 
     cartonista.cartoes.push(cartao.number);
     cartoes[cartao.number] = cartao;

     response.sendStatus(201);
 
  } else {
    response.sendStatus(404);
  }

});



module.exports = app;
