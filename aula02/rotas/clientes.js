// Importar o Express
var express = require('express');
var app = express.Router();

// Rotas
app.get('/', function(req, res){
    res.end('Seja bem vindo a API de clientes');
});

app.get('/cadastrar', function(req, res){
    res.end('Cadastrar clientes');
});

app.get('/listar', function(req, res){
    res.end('Listar clientes');
});

// Exportar
module.exports = app;