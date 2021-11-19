// Express
var express = require('express');
var app = express.Router();

// Vetor
var vetor = [];

// Índice para cadastrar novos produtos
var indiceCadastro = 1;

// Rotas
app.post('/', function(req, res){
    var obj = {
        'codigo':indiceCadastro,
        'produto':req.body.produto,
        'marca':req.body.marca,
        'valor':req.body.valor
    }

    indiceCadastro+=1;

    vetor.push(obj);

    res.status(201).send(obj);
});

app.get('/', function(req, res){
    res.status(200).send(vetor);
});

app.get('/:codigo', function(req, res){

    // Localizar a posição do produto através do código
    var posicao = vetor.findIndex(obj => {
        return parseInt(obj.codigo) === parseInt(req.params.codigo);
    });

    // Condicional
    if(posicao === -1){
        res.status(400).send({'mensagem':'Código inválido'});
    }else{
        res.status(200).send(vetor[posicao]);
    }

});

app.put('/:codigo', function(req, res){

    // Objeto
    var obj = {
        'codigo':req.params.codigo,
        'produto':req.body.produto,
        'marca':req.body.marca,
        'valor':req.body.valor
    }

    // Localizar a posição do produto através do código
    var posicao = vetor.findIndex(obj => {
        return parseInt(obj.codigo) === parseInt(req.params.codigo);
    });

    // Condicional
    if(posicao === -1){
        res.status(400).send({'mensagem':'Código inválido'});
    }else{
        vetor[posicao] = obj;
        res.status(200).send(obj);
    }

});

app.delete('/:codigo', function(req, res){

    // Localizar a posição do produto através do código
    var posicao = vetor.findIndex(obj => {
        return parseInt(obj.codigo) === parseInt(req.params.codigo);
    });

    // Condicional
    if(posicao === -1){
        res.status(400).send({'mensagem':'Código inválido'});
    }else{
        vetor.splice(posicao, 1);
        res.status(200).send({'mensagem':'Produto removido'});
    }

});

app.get('/registros', function(req, res){
    res.status(200).send({'quantidade':vetor.length})
});

app.get('/marcas/:marca', function(req, res){

    var filtragem = vetor.filter(obj => {
        return obj.marca === req.params.marca
    });

    res.status(200).send(filtragem);

});

// Exportar
module.exports = app