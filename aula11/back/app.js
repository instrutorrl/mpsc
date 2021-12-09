// Importar o Express
var express = require('express');

// Cors
var cors = require('cors');

// Sequelize
var { Sequelize, DataTypes } = require('sequelize');

// App
var app = express();

// Evitando conflito (CORS)
app.use(cors());

// Conexão entre o Node e o SQL Server
var sequelize = new Sequelize('projetoFinal', 'sa', 'Senha1234', {
    host:'localhost',
    dialect:'mssql'
});

// Modelo - Usuário
var Usuario = sequelize.define('usuarios',{
    nome:{type: DataTypes.STRING},
    senha:{type: DataTypes.STRING}
});

// Modelo - Postagem
var Postagem = sequelize.define('postagens',{
    titulo:{type: DataTypes.STRING},
    segmento:{type: DataTypes.STRING},
    texto:{type: DataTypes.STRING}
});

// Gerar tabelas
Usuario.sync();
Postagem.sync();

// JSON
app.use(express.json());

// Rotas
app.get('', function(req, res){
    res.end('Back-end ok!')
});

app.post('/autenticar', function(req, res){
    
    try{
        Usuario.findOne({where:{
            nome:req.body.nome,
            senha:req.body.senha
        }})
        .then(retorno => {
            if(retorno === null){
                res.status(200).send({"mensagem":"Usuário ou senha incorretos"});
            }else{
                res.status(200).send(retorno);
            }
        })
    }catch(erro){
        res.status(400).send(erro);
    }

});

app.post('/cadastrar', function(req, res){

    try{
        Postagem.create(req.body)
        .then(retorno => {
            if(retorno === null){
                res.status(404).send({"mensagem":"Falha ao realizar o cadastro da postagem"});
            }else{
                res.status(200).send(retorno);
            }
        })
    }catch(erro){
        res.status(400).send(erro);
    }

})

app.get('/listar', function(req, res){

    try{
        Postagem.findAll()
        .then(retorno => {
            if(retorno === null){
                res.status(200).send({"mensagem":"Falha ao listar as postagens"});
            }else{
                res.status(200).send(retorno);
            }
        })
    }catch(erro){
        res.status(400).send(erro);
    }

});

app.delete('/remover/:id', function(req, res){

    try{
        Postagem.destroy({
            where:{
                id:req.params.id
            }
        })
        .then(() => res.status(200).send(''));
    }catch(erro){
        res.status(400).send(erro);
    }

});

// Servidor
app.listen(8080);