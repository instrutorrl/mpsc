// Função
function positivoNegativo(numero){

    // Situação
    var situacao = '';

    // Validar se é um número
    if(isNaN(numero)){
        situacao = 'Não é um número';
    }else{

        // Verificar se é positivo ou negativo
        if(numero < 0){
            situacao = 'Negativo';
        }else{
            situacao = 'Positivo';
        }

    }

    // Retorno
    return situacao;

}

// Exportar função
module.exports = {positivoNegativo}