// crie um app -> express
const express = require('express');
const app = express();
let livros = require('./dados');
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
    resposta.status(200)
    // devolver a resposta da api
    resposta.json(descricao)
    // finalizar a resposta
    resposta.end()
})




//ATIVIDADE 02
//CRIAR UMA ROTA PARA MOSTRAR TODOS OS LIVROS
// url da rota '/v1/livros'
app.get('/v1/livros', (req , res)=>{
    console.log('Chamada get na rota /v1/livros')
    let chaves = Object.keys(livros) //todas as chaves do objeto livros
    let qtdLivros = chaves.length //quantidade de livros

    if(qtdLivros == 0){
        res.status(404)
        res.json({erro: 'Nenhum livro cadastrado'})
        res.end()
    }
    else{
        res.json({ totalLivros: qtdLivros, livros:  livros })
        res.status(200)
        res.end()
    }
    
})

// criar uma rota para obter um livro por id
// url da rota '/v1/livros/:id'
app.get('/v1/livros/:id', (req, res)=>{
    console.log(`Chamada get na rota /v1/livros/:${req.params.id}`)

    let idsLivros = Object.keys(livros)

    // verificação se o id existe no arry de chaves do objeto
    if(idsLivros.includes(req.params.id)){
        res.status(200)
        res.json(livros[req.params.id])
        res.end()        
    }
    else{
        res.status(404)
        res.json({erro: 'id inexistente'})
        res.end()
    }
})



app.listen(3000, () => {
    console.log('API rodando na porta 3000')
})



