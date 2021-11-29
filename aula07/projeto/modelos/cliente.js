// Importar módulos
var { DataTypes } = require('sequelize');
var sequelize = require('../bd/config');

// Modelo
var clientes = sequelize.define('clientes',{
    nome:{
        type : DataTypes.STRING
    },
    idade:{
        type : DataTypes.INTEGER
    }
});

// Exportar modelo
module.exports = clientes;