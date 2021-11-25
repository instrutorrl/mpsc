// Importar Express
var express = require('express');

// Importar Express-handlebars
var exphbs = require('express-handlebars');

// App
var app = express();

// Carregar pastas
app.use('/css', express.static(__dirname+'/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname+'/node_modules/bootstrap/dist/js'));
app.use('/imagens', express.static(__dirname+'/imagens'))
app.use('/estilos', express.static(__dirname+'/estilos'))

// Template via Express-handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Rotas
app.get('/', function(req, res){
    res.render('inicio');
});

app.get('/sobre', function(req, res){
    res.render('sobre');
});

app.get('/contato', function(req, res){
    res.render('contato');
});

// Servidor
app.listen(8080);