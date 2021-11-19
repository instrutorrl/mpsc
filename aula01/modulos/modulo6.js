// Função para retornar a tabuada
exports.tabuada = function(numero){

    // Índice
    var indice = 0;

    // Estrutura
    var estrutura = '';

    // Laço - While
    while(indice < 11){
        estrutura += (numero * indice) + ' ';
        indice++;
    }

    // Retorno
    return estrutura;

}

/*
    ++  Incrementa +1
    --  Decrementa -1
    +=3 Incrementa +3
    -=2 Decrementa -2
    *=4 Incrementa *4
    /=2 Decrementa /2
*/