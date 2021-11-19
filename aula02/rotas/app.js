// Importar o módulo do Express
var express = require('express');
var app = express();

// Importar rota de clientes
var rotaClientes = require('./clientes');
app.use('/clientes', rotaClientes);

// Habilitar o acesso de informações via rotas
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Rotas
app.get('/', function(req, res){
    res.sendFile(__dirname + '/pagina.html');
    //res.write('Hello World!');
    //res.end();
});

app.post('/cadastrar', function(req, res){
    res.end(req.body.texto);
});

app.get('/contato', function(req, res){
    res.end('Contato');
});

app.get('/:nome', function(req, res){
    res.end('Boa tarde ' + req.params.nome);
});

app.get('/:nome/:cidade', function(req,res){
    res.end('Olá ' + req.params.nome + ' é de ' + req.params.cidade);
});

// Executar projeto
app.listen(8080);