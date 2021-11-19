// Express
var express = require('express');
var app = express.Router();

// Vetor
var clientes = [];

// Índice de cadastro
var indice = 1;

// Rotas
app.get('/', function(req, res){
    res.send(clientes);
});

app.post('/', function(req, res){
    var cliente = {
        'codigo':indice,
        'nome':req.body.nome,
        'idade':req.body.idade,
        'cidade':req.body.cidade
    }

    indice+=1;

    clientes.push(cliente);

    res.status(201).send(cliente);
});

app.put('/:codigo', function(req, res){

    // Objeto
    var cliente = {
        'codigo':req.params.codigo,
        'nome':req.body.nome,
        'idade':req.body.idade,
        'cidade':req.body.cidade
    }

    // Localizar a posição do cliente através do código
    var posicao = clientes.findIndex(obj => {
        return parseInt(obj.codigo) === parseInt(req.params.codigo);
    });

    // Condicional
    if(posicao === -1){
        res.status(400).send({'mensagem':'Código inválido'});
    }else{
        clientes[posicao] = cliente;
        res.status(200).send(cliente);
    }

});

app.delete('/:codigo', function(req, res){

    // Localizar a posição do cliente através do código
    var posicao = clientes.findIndex(obj => {
        return parseInt(obj.codigo) === parseInt(req.params.codigo);
    });

    // Condicional
    if(posicao === -1){
        res.status(400).send({'mensagem':'Código inválido'});
    }else{
        clientes.splice(posicao, 1);
        res.status(200).send({'mensagem':'Cliente removido'});
    }

});

app.get('/:codigo', function(req, res){

    // Localizar a posição do cliente através do código
    var posicao = clientes.findIndex(obj => {
        return parseInt(obj.codigo) === parseInt(req.params.codigo);
    });

    // Condicional
    if(posicao === -1){
        res.status(400).send({'mensagem':'Código inválido'});
    }else{
        res.status(200).send(clientes[posicao]);
    }

});

app.get('/qtd/registros', function(req, res){
    res.status(200).send({'quantidade':clientes.length})
});

app.get('/cidades/:termo', function(req, res){

    var filtragem = clientes.filter(obj => {
        return obj.cidade === req.params.termo
    });

    res.status(200).send(filtragem);

});

// Exportar
module.exports = app