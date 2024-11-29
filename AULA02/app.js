// crie um app -> express
const express = require('express');
const app = express();
let livros = require('./dados');
// usar o express.json()
// conversão do corpo da requisição para um objeto js
app.use(express.json())


let descricao = {
    nome: 'API LIVROS GT03',
    objetivo: 'gerenciar uma coleção de livros',
    autor: 'Káthia Rocha',
    versao: '1.0.0',
    data: '2024',
    funcao: () => { console.log('funcao') }
}


app.get('/',(requisicao, resposta)=>{

    console.log('Chamada get na rota raiz')
    resposta.status(200)
    resposta.json(descricao)
    resposta.end()
})


app.get('/v1/livros', (req , res)=>{
    console.log('Chamada get na rota /v1/livros')
    let chaves = Object.keys(livros) 
    let qtdLivros = chaves.length 

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


app.post('/v1/livros', (req, res)=>{
    // lógica para acessar as informações passadas no corpo da requisição
    //trazendo todos os ids existentes:
   

    let dados = req.body
    console.log('Chamada post na rota /v1/livros')
    console.log(dados)

    // null, undefined, '' -> false

    // !false -> true

    if(!dados || !dados.titulo || !dados.autor || !dados.anoPublicacao || !dados.genero || !dados.resumo){

        return res.status(404).json({
            "resposta": "Todos os Campos são obrigatórios!",
            "campos obrigatórios": ["titulo", "autor", "anoPublicacao", "genero", "resumo"],
            "campos enviados": Object.keys(dados)})
    }
    //caso sim: criar o livro e responde como sucesso
    let idsLivros = Object.keys(livros)
    let novoID = Math.max(...idsLivros)+1
    // criação de uma nova chave/valor no objeto livros
    livros[novoID] = dados
    res.status(201).json({
        "mensagem": "Livro adicionado com sucesso.",
        "id": novoID,
        "livro": dados})
    res.end()
})

app.delete('/v1/livros/:id', (req, res)=>{

})

app.listen(3000, () => {
    console.log('API rodando na porta 3000')
})



