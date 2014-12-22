var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var cartonistas = require('../controllers/cartonistas');
var cartoes = require('../controllers/cartoes');

router.use(bodyParser.json());

router.route('/')
  .get(cartonistas.obterTodos)
  .post(cartonistas.salvar);

router.route('/:id')
  .get(cartonistas.obterPorId)
  .delete(cartonistas.deletarPorId);

router.route('/:id/cartoes')
  .get(cartoes.obterTodos)
  .post(cartoes.salvar);

module.exports = router;
