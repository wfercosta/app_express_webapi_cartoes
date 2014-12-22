"use strict";

var model = require('../models/cartonista.js');

exports.obterTodos = function (request, response) {
   model.obterTodos(function(err, data) {
     if (err) response.sendStatus(404);
     response.status(200).json(data);
   });
};

exports.salvar = function(request, response) {
    var registro = request.body;  
    model.salvar(registro, function (err, data) {
      if (err) response.sendStatus(404);
      response.status(201).json(data);
    });
};

exports.obterPorId = function(request, response) {
    model.obterPorId(request.params.id, function(err, data) {
      if (err) response.sendStatus(404);
      response.status(200).json(data);
    });
};

exports.deletarPorId = function (request, response) {
    model.deletar(request.params.id, function(err, data) {
      if (err) response.sendStatus(404);
      response.status(200).json(data);
    }); 
};

