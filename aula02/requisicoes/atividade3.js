// Express
var express = require('express');
var app = express.Router();

// Vetor
var vetor = [];

// Índice para cadastrar novos alunos
var indiceCadastro = 1;

// Rotas
app.post('/', function(req, res){

    var media = (parseFloat(req.body.nota1) + parseFloat(req.body.nota2) + parseFloat(req.body.nota3)) / 3;
    var situacao = media >= 7 ? 'Aprovado' : media >= 5 ? 'Em Exame' : 'Reprovado';

    var obj = {
        'codigo':indiceCadastro,
        'nome':req.body.nome,
        'nota1':req.body.nota1,
        'nota2':req.body.nota2,
        'nota3':req.body.nota3,
        'media':media,
        'situacao':situacao
    }

    indiceCadastro+=1;

    vetor.push(obj);

    res.status(201).send(obj);
});

app.get('/', function(req, res){
    res.status(200).send(vetor);
});

app.get('/:codigo', function(req, res){

    // Localizar a posição do aluno através do código
    var posicao = vetor.findIndex(obj => {
        return parseInt(obj.codigo) === parseInt(req.params.codigo);
    });

    // Condicional
    if(posicao === -1){
        res.status(400).send({'mensagem':'Código inválido'});
    }else{
        res.status(200).send(vetor[posicao]);
    }

});

app.put('/:codigo', function(req, res){

    var media = (parseFloat(req.body.nota1) + parseFloat(req.body.nota2) + parseFloat(req.body.nota3)) / 3;
    var situacao = media >= 7 ? 'Aprovado' : media >= 5 ? 'Em Exame' : 'Reprovado';

    var obj = {
        'codigo':req.params.codigo,
        'nome':req.body.nome,
        'nota1':req.body.nota1,
        'nota2':req.body.nota2,
        'nota3':req.body.nota3,
        'media':media,
        'situacao':situacao
    }

    // Localizar a posição do aluno através do código
    var posicao = vetor.findIndex(obj => {
        return parseInt(obj.codigo) === parseInt(req.params.codigo);
    });

    // Condicional
    if(posicao === -1){
        res.status(400).send({'mensagem':'Código inválido'});
    }else{
        vetor[posicao] = obj;
        res.status(200).send(obj);
    }

});

app.delete('/:codigo', function(req, res){

    // Localizar a posição do aluno através do código
    var posicao = vetor.findIndex(obj => {
        return parseInt(obj.codigo) === parseInt(req.params.codigo);
    });

    // Condicional
    if(posicao === -1){
        res.status(400).send({'mensagem':'Código inválido'});
    }else{
        vetor.splice(posicao, 1);
        res.status(200).send({'mensagem':'Aluno removido'});
    }

});

app.get('/estatisticas/registros', function(req, res){
    res.status(200).send({'quantidade':vetor.length})
});

app.get('/estatisticas/situacao/:tipo', function(req, res){

    var filtragem = vetor.filter(obj => {
        return obj.situacao === req.params.tipo
    });

    res.status(200).send(filtragem);

});

app.get('/estatisticas/qtdSituacao', function(req, res){

    var aprovados = 0;
    var exames = 0;
    var reprovados = 0;

    for(var i=0; i<vetor.length; i++){
        if(vetor[i].situacao === 'Aprovado'){
            aprovados++;
        }else if(vetor[i].situacao === 'Em Exame'){
            exames++;
        }else{
            reprovados++;
        }
    }

    var obj = {
        'Aprovado':aprovados,
        'Em exame':exames,
        'Reprovado':reprovados
    }

    res.status(200).send(obj);

});

// Exportar
module.exports = app