
var model = require('./cartonista');

var cartoes = {
  "1234.4567.8901.1234" : {number: "1234.4567.8901.1234", since: "09/04", valid: "08/21", segment: "VISA Platinum"}, 
  "1234.4567.8901.0000" : {number: "1234.4567.8901.0000", since: "09/04", valid: "08/21", segment: "VISA Platinum"} 
}

exports.obterPorIdCartonista = function(id, callback) {

   model.obterPorId(id, function(err, data) {
     if (err) return callback (err, null);
     if (data) {
        var saida = [];
        data.cartoes.forEach(function(entry) {
          saida.push(cartoes[entry]);
        });
        callback(null, saida);
     }
   });

};

exports.salvarPorIdCartonista = function(id, cartao, callback) {
   model.obterPorId(id, function(err, data) {
     if (err) return callback (err, null);
     if (data) {
       model.salvarReferenciaCartao(id, cartao.number, function (err, data) {
          if (err) return callback(err, null);
          cartoes[cartao.number] = cartao;
          callback(null, cartao);
       });
     }
   });
};


