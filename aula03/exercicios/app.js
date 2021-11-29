// Importar módulo Express
var express = require('express');

// Importar módulo Express-handlebars
var exphbs = require('express-handlebars');

// App
var app = express();

// Diretório público (Imagens, CSS e JS)
app.use(express.static(__dirname + '/publico'));

// Configurar envio e recebimento de dados (formulário)
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Configurar o Express-handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Módulo node-fetch
var nodefetch = require('node-fetch');

// Rotas
app.get('/ex1', function(req, res){
    res.render('ex1');
});

app.post('/ex1', function(req, res){
    
    var n1 = parseFloat(req.body.nota1);
    var n2 = parseFloat(req.body.nota2);
    var n3 = parseFloat(req.body.nota3);

    var media = ((n1+n2+n3)/3).toFixed(1);
    
    var situacao = media >= 7 ? 'Aprovado(a)' : 'Reprovado(a)';
    
    res.render('ex1', {media:media, situacao:situacao});

});

// Servidor
app.listen(8080);