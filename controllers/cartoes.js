
var _ = require('underscore');
var model = require('../models/cartoes.js');

exports.obterTodos = function (request, response) {

    var id = _.clone(request.params.id);
    
    model.obterPorIdCartonista(id, function(err, data) {
      if (err) response.sendStatus(404);
      response.status(200).json(data);
    });

};

exports.salvar = function (request, response) {

    var id = _.clone(request.params.id);
    var cartao = _.clone(request.body);

    model.salvarPorIdCartonista(id, cartao,  function(err, data) {
      if (err) response.sendStatus(404);
      response.status(201).json(data);
    });

};
