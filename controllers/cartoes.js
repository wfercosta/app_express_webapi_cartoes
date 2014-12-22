var model = require('../models/cartoes.js');

exports.obterTodos = function (request, response) {
    model.obterPorIdCartonista(request.params.id, function(err, data) {
      if (err) response.sendStatus(404);
      response.status(200).json(data);
    });
};

exports.salvar = function (request, response) {
    model.salvarPorIdCartonista(request.params.id, request.body,  function(err, data) {
      if (err) response.sendStatus(404);
      response.status(201).json(data);
    });
};
