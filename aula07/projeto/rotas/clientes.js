// Módulo Express
var express = require('express');

// Objeto para gerenciar rotas
var rota = express.Router();

// Modelo cliente
var clientes = require('../modelos/cliente');

// Módulo Sequelize para efetuar operações SQL
var { Op } = require('sequelize');

// Módulo de controle de clientes
var controleCliente = require('../controle/clientes');

// Rotas
rota.get('/', function(req, res){
    clientes.findAll()
    .then(retorno => res.status(200).send(retorno));
});

rota.get('/colunas', function(req, res){
    clientes.findAll({
        attributes : ['id', 'nome', 'idade']
    })
    .then(retorno => res.status(200).send(retorno));
});

rota.get('/nomes/:termo', function(req, res){
    clientes.findAll({
        where: {
            nome : {
                [Op.like] : `%${req.params.termo}%`
            }
        }
    })
    .then(retorno => res.status(200).send(retorno));
});

rota.get('/:id', function(req, res){
    clientes.findAll({
        where:{
            id:req.params.id 
        }
    })
    .then(retorno => res.status(200).send(retorno));
});

rota.post('/', function(req, res){

    let valida = controleCliente.validaCampos(req.body.nome, req.body.idade);

    if(valida){
        clientes.create(req.body)
        .then(retorno => res.status(201).send(retorno));
    }else{
        res.status(400).send({'mensagem':'Os campos precisam estar preenchidos.'});
    }

});

rota.put('/:id', function(req, res){
    clientes.update(req.body, {where:{id:req.params.id}})
    .then(retorno => res.status(200).send(retorno));
});

rota.delete('/:id', function(req, res){
    clientes.destroy({where:{id:req.params.id}})
    .then(() => res.send({'mensagem':'Removido com sucesso!'}));
});

// Exportar rotas
module.exports = rota;