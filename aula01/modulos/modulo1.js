// Função para retornar se é maior de idade ou menor de idade
function mensagem(nome, idade){

    // Situação da pessoa
    var situacao = "menor de idade";

    // Condicional
    if(idade >= 18){
        situacao = "maior de idade";
    }

    // Retorno
    return nome + ' é ' + situacao;

}

// Exportar
module.exports = { mensagem }

/*
    Operadores relacionais
    >   Maior
    <   Menor
    >=  Maior ou igual
    <=  Menor ou igual
    ==  Igual (Valida apenas o valor)
    === Igual (Valida o valor e o tipo)
    !=  Diferente (Valida apenas o valor)
    !== Diferente (Valida o valor e o tipo)
*/
