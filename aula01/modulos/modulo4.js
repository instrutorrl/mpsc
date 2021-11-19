// Função para retornar os dados da compra
exports.mensagem = function(produto, valor, pagamento){

    // Cálculo
    var total = valor >= 100 && pagamento == 'à vista' ? valor * 0.9 : valor;

    // Retorno
    return `O produto ${produto} será de R$ ${total}`;

}