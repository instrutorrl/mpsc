// Importar o módulo Sequelize
var { Sequelize } = require('sequelize');

// Efetuar a conexão com o banco SQL Server
var sequelize = new Sequelize('atividade', 'sa', 'Senha1234', {
    host : 'localhost',
    dialect : 'mssql'
});

// Teste de conexão
// try{
//     sequelize.authenticate();
//     console.log('Conexão efetuada com sucesso!');
// }catch(erro){
//     console.log('Falha ao conectar ' + erro);
// }

// Exportar objeto
module.exports = sequelize;