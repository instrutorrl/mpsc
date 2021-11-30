// Express
var express = require('express');

// App
var app = express();

// Importar Jsonwebtoken
var jwt = require('jsonwebtoken');

// Especificar o tipo da requisição
app.use(express.json());

// Rotas
app.get('/', function(req, res){
    res.end('Funcionou!')
});

app.post('/criar', function(req, res){
    var token = jwt.sign({
        'nome':req.body.nome,
        exp: Math.floor(Date.now() / 1000) + 30
    }, 'mpsc');

    res.status(200).send(token);
});

app.get('/verificar/:token', function(req, res){

    try{
        jwt.verify(req.params.token, 'mpsc', function(falha, decodificado){
            if (falha) throw falha;
            res.status(200).send(decodificado);
        });
    }catch(erro){
        res.status(401).send(erro);
    }

});

// Servidor
app.listen(8080);