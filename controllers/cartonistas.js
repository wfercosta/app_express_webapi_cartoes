"use strict";

var _ = require('underscore');
var model = require('../models/cartonista.js');

exports.obterTodos = function (request, response) {
   model.obterTodos(function(err, data) {
     if (err) response.sendStatus(404);
     response.status(200).json(data);
   });
};

exports.salvar = function(request, response) {

    var cartonista = _.clone(request.body);

    model.salvar(cartonista, function (err, data) {
      if (err) response.sendStatus(404);
      response.status(201).json(data);
    });

};

exports.obterPorId = function(request, response) {
   
   var id = _.clone(request.params.id);

    model.obterPorId(id, function(err, data) {
      if (err) response.sendStatus(404);
      response.status(200).json(data);
    });

};

exports.deletarPorId = function (request, response) {

    var id = _.clone(request.params.id);

    model.deletar(id, function(err, data) {
      if (err) response.sendStatus(404);
      response.status(200).json(data);
    }); 

};

