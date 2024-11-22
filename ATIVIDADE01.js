// crie um app -> express
const express = require('express');
const app = express();
// usar o express.json()
// conversão do corpo da requisição para um objeto js
app.use(express.json())



// crie um servidor
// crie um endpoint raiz para a api
// como resposta do endpoint raiz e o método get exiba uma mensagem no formato JSON contendo as seguintes informações: nome da api, objetivo, autor, versão e data

let descricao = {
    nome: 'API LIVROS GT03',
    objetivo: 'gerenciar uma coleção de livros',
    autor: 'Káthia Rocha',
    versao: '1.0.0',
    data: '2024',
    funcao: () => { console.log('funcao') }
}


//verificar se o node está instalado
// fazer a instalação do express 
//      npm install express

//criar um app
// criar o endpoint raiz
app.get('/',(requisicao, resposta)=>{
    console.log('Chamada get na rota raiz')
    // devolver a resposta da api
    resposta.json(descricao)
    // finalizar a resposta
    resposta.end()
})

app.listen(3000, () => {
    console.log('API rodando na porta 3000')
})

// configurar a resposta 
// node nomeArquivo.js para executar