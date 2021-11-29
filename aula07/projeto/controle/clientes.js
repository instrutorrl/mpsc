// Validar campos vazios
function validaCampos(nome, idade){

    // Variável para retornar a validação
    var valida = false;

    // Condicional
    if(nome !== '' && idade !== ''){
        valida = true;
    }

    // Retorno
    return valida;

}

// Exportar função
module.exports = {validaCampos};