// Função para retornar o dia da semana
exports.mensagem = function(dia){

    // Condicional
    if(dia == 1 || dia == 8 || dia == 15 || dia == 22 || dia == 29){
        return 'Segunda-feira';
    }else if(dia == 2 || dia == 9 || dia == 16 || dia == 23 || dia == 30){
        return 'Terça-feira';
    }else if(dia == 3 || dia == 10 || dia == 17 || dia == 24){
        return 'Quarta-feira';
    }else if(dia == 4 || dia == 11 || dia == 18 || dia == 25){
        return 'Quinta-feira';
    }else if(dia == 5 || dia == 12 || dia == 19 || dia == 26){
        return 'Sexta-feira';
    }else if(dia == 6 || dia == 13 || dia == 20 || dia == 27){
        return 'Sábado';
    }else if(dia == 7 || dia == 14 || dia == 21 || dia == 28){
        return 'Domingo';
    }else{
        return 'Data inválida';
    }

}

/*
    Operadores Lógicos
    && - E
    || - OU
*/