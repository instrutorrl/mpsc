// Módulo Express
var express = require('express');

// Importar Modelo
var clientes = require('./modelos/cliente');

// Criar tabela
clientes.sync();

// App
var app = express();

// Especificando o formato de envio e recebimento JSON
app.use(express.json());

// Rotas
var rotaCliente = require('./rotas/clientes');
app.use('/clientes', rotaCliente);

// Servidor
app.listen(8080);