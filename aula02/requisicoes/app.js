// Express
var express = require('express');

// App
var app = express();

// Selecionar arquivos estáticos (CSS, JS, Imagens...)
app.use(express.static(__dirname + '/publico'));

// Manipulação dos dados
app.use(express.json());

// Rotas (Atividades)
var clientes = require('./atividade1');
var produtos = require('./atividade2');
var alunos = require('./atividade3');

app.use('/clientes', clientes);
app.use('/produtos', produtos);
app.use('/alunos', alunos);

// Rota da página HTML
app.get('/pagina', function(req, res){
    res.sendFile(__dirname + '/pagina.html');
});

// Servidor
app.listen(8080);