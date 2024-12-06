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
    console.log(`Chamada delete na rota /v1/livros/:${req.params.id}`)
    let idsLivros = Object.keys(livros)
    let idLivro = req.params.id

    if(!idsLivros.includes(idLivro)){
        res.status(404)
        res.json({erro: 'id inexistente'})
        res.end()
    }
   
    delete livros[idLivro] //deleta uma chave de um objeto
    res.status(200)
    res.json({mensagem: 'livro deletado com sucesso'})
    res.end()

})
//  correção em 15min :)
app.put('/v1/livros/:id', (req, res)=>{
    const idLivroAtualizar = req.params.id
    const idsExistentes = Object.keys(livros)

    // verificação se o id não existe no arry de chaves do objeto
    if(!idsExistentes.includes(idLivroAtualizar)){
        res.status(404).json({erro: 'id inexistente'})
        res.end()
    }

    if(!req.body){
        res.status(400).json({erro: 'é necessário informar os dados para atualizar o livro'})
        res.end()
    }
    else{
        const { titulo, autor, anoPublicacao, genero, resumo} = req.body
        if(titulo){
            livros[idLivroAtualizar].titulo = titulo
        }
        if(autor){
            livros[idLivroAtualizar].autor = autor
        }
        if(anoPublicacao){
            livros[idLivroAtualizar].anoPublicacao = anoPublicacao
        }
        if(genero){
            livros[idLivroAtualizar].genero = genero
        }
        if(resumo){
            livros[idLivroAtualizar].resumo = resumo
        }
        res.status(200).json({mensagem: 'livro atualizado com sucesso'})
        res.end()
    }



    // caminho feliz da atualização
    




})

app.listen(3000, () => {
    console.log('API rodando na porta 3000')
})



