// Importar módulos
var express = require('express');
var exphbs = require('express-handlebars');
var fetch = require('node-fetch');
var formidable = require('formidable');
var fs = require('fs');

// App
var app = express();

// Especificar o diretório imagens
app.use(express.static(__dirname+'/imagens'));

// Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Enviar/receber dados
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Rotas
app.get('/', function(req, res){
    
    fetch('http://localhost:3000/produtos')
    .then(produtos => produtos.json())
    .then(produtos => res.render('inicio', {produtos:produtos}))

});

app.post('/cadastrar', function(req, res){

    var formulario = new formidable.IncomingForm();
    
    formulario.parse(req, function(erro, campo, arquivo){

        var arquivoImagem = arquivo.imagem.filepath;
        var diretorioImagem = __dirname+'/imagens/'+arquivo.imagem.originalFilename;

        fs.rename(arquivoImagem, diretorioImagem, function(erro){

            var obj = {
                'produto':campo.produto,
                'imagem':arquivo.imagem.originalFilename
            }

            fetch('http://localhost:3000/produtos', {
                method:'post',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(obj)
            })
            .then(() => res.redirect('/'));

        });

    });

});

app.listen(8080);