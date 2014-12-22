
var cartonistas = { 
  "123456" : {id: 123456, nome: "Wander Fernando Costa", cartoes: ["1234.4567.8901.1234"]},
  "567890" : {id: 567890, nome: "Nelsinho Borges", cartoes: ["1234.4567.8901.0000"]},
}; 


exports.obterTodos = function (callback) {
   callback(null, Object.keys(cartonistas))
};


exports.salvar = function(cartonista, callback) {
    cartonistas[cartonista.id]=cartonista;
    cartonistas[cartonista.id].cartoes=[];
    callback(null, cartonista);
};

exports.obterPorId = function(id, callback) {
    var registro = cartonistas[id];
    if (registro) return callback(null, registro);
    callback(true, null);
};


exports.deletar = function (id, callback) {
    exports.obterPorId(id, function (err, data) {
       if(err) return callback(err, null);
       if (data) {
         delete cartonistas[id];
         callback(null, data);
       }
       callback(true, null);
    });
};

exports.salvarReferenciaCartao = function (id, number, callback) {
    exports.obterPorId(id, function (err, data) {
       if(err) return callback(err, null);
       if (!data) return  callback(true, null);

       if(!cartonistas[id].cartoes) cartonistas[id].cartoes = [];
       cartonistas[id].cartoes.push(number); 
       callback(null, number);
    });
};

