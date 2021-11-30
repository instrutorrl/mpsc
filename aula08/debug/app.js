// Módulo Express
var express = require('express');

// App
var app = express();

// Importar módulo
var modulo = require('./modulo');

// Rota
app.get('/', function(req, res){
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.end(modulo.positivoNegativo(6));
});

// Servidor
app.listen(8080);