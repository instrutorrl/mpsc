// Função para retornar a média
function calculoMedia(nota1, nota2, nota3){
    return (nota1+nota2+nota3)/3;
}

// Função para retornar a situação
function verificarSituacao(media){
    return media >= 7 ? 'Aprovado' : 'Reprovado'; 
}

// Função para retornar uma mensagem
exports.mensagem = function(nota1, nota2, nota3){

    // Obter a média
    var media = calculoMedia(nota1, nota2, nota3);

    // Situação
    var situacao = verificarSituacao(media);

    // Retorno (Template String)
    return `${situacao} com média ${media}`;

}