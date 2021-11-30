// Express
var express = require('express');

// App
var app = express();

// Cors
var cors = require('cors');
var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200
  }

// Rotas
app.get('/', cors(corsOptions), function(req, res){
    res.end('Hello World!');
});

// Servidor
app.listen(8080);