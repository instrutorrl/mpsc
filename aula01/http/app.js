// Importar o módulo Http
var http = require('http');

// Importar o módulo File System
var fs = require('fs');

// Importar o módulo Node-fetch
var fetch = require('node-fetch');

// Executando função http
http.createServer(function(requisicao, retorno){

    retorno.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    switch(requisicao.url){
        case '/postagens':
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(postagens => postagens.json())
            .then(postagens => console.table(postagens))
            .then(retorno.end());
        break;

        case '/sobre':
            retorno.write('Página sobre');
            retorno.end();
        break;
        
        case '/contato':
            retorno.write('Página de contato');
            retorno.end();
        break;
            
        default:
            fs.readFile('pagina.html', function(erro, dados){
                retorno.write(dados);
                retorno.end();
            })    
    }


    // retorno.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    // retorno.write('Utilizando o módulo http do Node.js');
    // retorno.end();
}).listen(8080);