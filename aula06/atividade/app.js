// Importar express
var express = require('express');

// Importar express-handlebars
var exphbs = require('express-handlebars');

// Importar módulo SQL Server
var mssql = require('mssql');

// App
var app = express();

// Template
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Importar configurações do banco de dados
var bd = require('./config');

// Envio e recebimento de dados
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Rotas
app.post('/cadastrar', function (req, res) {

    var nome = req.body.nome;
    var idade = parseInt(req.body.idade);

    new mssql.ConnectionPool(bd.acesso()).connect().then(pool => {
        return pool.query(`INSERT INTO clientes (nome, idade) VALUES ('${nome}', ${idade})`);
    }).then(retorno => {
        res.redirect(`/?mensagem=${
            retorno.rowsAffected === 0 ? 'Falha ao cadastrar' : 'Cadastro efetuado com sucesso'
        }`);
    })

});

app.get('/', function (req, res) {
    new mssql.ConnectionPool(bd.acesso()).connect().then(pool => {
        return pool.query('SELECT * FROM clientes');
    }).then(retorno => {
        res.render('pagina', {
            clientes: retorno.recordset,
            mensagem: req.query.mensagem
        })
    })

});

app.get('/remover/:codigo', function (req, res) {

    new mssql.ConnectionPool(bd.acesso()).connect().then(pool => {
        return pool.query(`DELETE FROM clientes WHERE codigo = ${
            req.params.codigo
        }`)
    }).then(retorno => {
        res.redirect(`/?mensagem=${
            retorno.rowsAffected === 0 ? 'Falha ao excluir' : 'Excluído com sucesso'
        }`);
    })

});

// Servidor
app.listen(8080);


// Validar conexão com bd
// new mssql.ConnectionPool(bd.acesso()).connect()
// .then(() => console.log('Conexão ok!'))
// .catch(erro => console.log('Falha ao conectar: ' + erro))
