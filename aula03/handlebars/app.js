// Importar módulo Express
var express = require('express');

// Importar módulo Express-handlebars
var exphbs = require('express-handlebars');

// App
var app = express();

// Configurar o Express-handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Listagem de produtos
var produtos = [
    {'produto':'Monitor Dell 27',       'valor':2000},
    {'produto':'Smartphone Galaxy S21', 'valor':5000},
    {'produto':'iPhone 13',             'valor':9000},
    {'produto':'Teclado HP',            'valor':340},
    {'produto':'Mouse Multilaser',      'valor':70}
];

// Rotas
app.get('/', function(req, res){
    res.render('inicio', {exibir:true});
});

app.get('/sobre', function(req, res){
    res.render('sobre', {dados:produtos});
});

app.get('/contato', function(req, res){
    res.render('contato');
});

// Servidor
app.listen(8080);