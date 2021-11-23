// Importar pacotes
var express = require('express');
var exphbs = require('express-handlebars');
var fetch = require('node-fetch');

// App
var app = express();

// Template Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Configurar envio de informações
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Rotas
app.get('/', function(req, res){

    fetch('http://localhost:3000/alunos')
    .then(retorno => retorno.json())
    .then(dadosConvertidos => res.render('inicio', {vetor:dadosConvertidos}))

});

app.post('/cadastrar', function(req, res){
    
    var nome = req.body.nome;
    var nota1 = parseFloat(req.body.nota1);
    var nota2 = parseFloat(req.body.nota2);
    var media = ((nota1+nota2)/2).toFixed(1);

    var obj = {
        'nome':nome,
        'nota1':nota1,
        'nota2':nota2,
        'media':media
    }

    fetch('http://localhost:3000/alunos', {
        method:'post',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
    })
    .then(() => res.redirect('/'));
    
});

app.get('/selecionar/:id', function(req, res){

    var id = req.params.id;

    fetch(`http://localhost:3000/alunos/${id}`)
    .then(retorno => retorno.json())
    .then(dados => res.render('editar', {aluno:dados}));

});

app.get('/remover/:id', function(req, res){

    var id = req.params.id;
    
    fetch(`http://localhost:3000/alunos/${id}`,{method:'delete'})
    .then(res.redirect('/'));

});


app.post('/editar', function(req, res){
    
    var id = req.body.id;
    var nome = req.body.nome;
    var nota1 = parseFloat(req.body.nota1);
    var nota2 = parseFloat(req.body.nota2);
    var media = ((nota1+nota2)/2).toFixed(1);

    var obj = {
        'nome':nome,
        'nota1':nota1,
        'nota2':nota2,
        'media':media
    }

    fetch(`http://localhost:3000/alunos/${id}`, {
        method:'put',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
    })
    .then(() => res.redirect('/'));
    
});


// Servidor
app.listen(8080);