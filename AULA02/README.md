# AULA01 - Desenvolvimento de uma API com Express

## Descrição da Aula
Nesta aula, criaremos as rotas da API simples utilizando o framework **Express** no Node.js. O objetivo principal foi desenvolver endpoints básicos para gerenciar uma coleção de livros, para criar novos livros (post), atualizar livros existentes(put) e deletar  livros (delete).

---

## Passos Realizados

### 1. Configuração Inicial
- Verificamos a instalação do Node.js e do gerenciador de pacotes **npm**.
- Instalamos o Express com o comando:
  ```bash
  npm install express
  ```
- Atenção:
Caso você esteja usando o mesmo diretório da aula passada não será necessário executar os passos descritos no tópico 2 .

### 2. Estruturação do Projeto
- Criamos um arquivo principal para definir os dados : dados.js
    ```javascript
        let livros = {
        1: {
        titulo: "Dom Quixote",
        autor: "Miguel de Cervantes",
        anoPublicacao: 1605,
        genero: "Romance",
        resumo: "A história de um cavaleiro e seu fiel escudeiro."
        },
        2: {
        titulo: "1984",
        autor: "George Orwell",
        anoPublicacao: 1949,
        genero: "Distopia",
        resumo: "Uma reflexão sobre um futuro totalitário."
        },
        3: {
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J.K. Rowling",
        anoPublicacao: 1997,
        genero: "Fantasia",
        resumo: "A história de um jovem bruxo descobrindo seu destino."
        },
        4: {
        titulo: "O Código Da Vinci",
        autor: "Dan Brown",
        anoPublicacao: 2003,
        genero: "Suspense",
        resumo: "Uma trama de mistério envolvendo a história da arte e conspirações."
        },
        5: {
        titulo: "A Guerra dos Tronos",
        autor: "George R.R. Martin",
        anoPublicacao: 1996,
        genero: "Fantasia Épica",
        resumo: "O início de uma luta pelo poder em um mundo medieval cheio de intrigas."
        },
        6: {
        titulo: "Harry Potter e a Câmara Secreta",
        autor: "J.K. Rowling",
        anoPublicacao: 1998,
        genero: "Fantasia",
        resumo: "Harry volta a Hogwarts e enfrenta um novo mistério."
        },
        7: {
        titulo: "Anjos e Demônios",
        autor: "Dan Brown",
        anoPublicacao: 2000,
        genero: "Suspense",
        resumo: "O simbologista Robert Langdon tenta impedir um atentado do Illuminati."
        },
        8: {
        titulo: "A Fúria dos Reis",
        autor: "George R.R. Martin",
        anoPublicacao: 1998,
        genero: "Fantasia Épica",
        resumo: "As tensões aumentam enquanto reis disputam o Trono de Ferro."
        },
        9: {
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        autor: "J.R.R. Tolkien",
        anoPublicacao: 1954,
        genero: "Fantasia Épica",
        resumo: "A jornada de Frodo Bolseiro para destruir o Um Anel e salvar a Terra-média."
        },
        10: {
        titulo: "O Senhor dos Anéis: As Duas Torres",
        autor: "J.R.R. Tolkien",
        anoPublicacao: 1954,
        genero: "Fantasia Épica",
        resumo: "A continuação da luta contra as forças de Sauron e a ameaça do Um Anel."
        },
        11: {
        titulo: "O Senhor dos Anéis: O Retorno do Rei",
        autor: "J.R.R. Tolkien",
        anoPublicacao: 1955,
        genero: "Fantasia Épica",
        resumo: "O confronto final para destruir o Um Anel e derrotar Sauron."
        },
        12: {
        titulo: "O Leão, a Feiticeira e o Guarda-Roupa",
        autor: "C.S. Lewis",
        anoPublicacao: 1950,
        genero: "Fantasia",
        resumo: "Quatro crianças descobrem o mundo mágico de Nárnia e enfrentam a Feiticeira Branca."
        },
        13: {
        titulo: "Príncipe Caspian",
        autor: "C.S. Lewis",
        anoPublicacao: 1951,
        genero: "Fantasia",
        resumo: "As crianças retornam a Nárnia e ajudam o Príncipe Caspian a recuperar seu trono."
        },
        14: {
        titulo: "A Viagem do Peregrino da Alvorada",
        autor: "C.S. Lewis",
        anoPublicacao: 1952,
        genero: "Fantasia",
        resumo: "Edmundo e Lucy retornam a Nárnia para ajudar a libertar o Príncipe Caspian."
        },
        15: {
        titulo: "Memórias Póstumas de Brás Cubas",
        autor: "Machado de Assis",
        anoPublicacao: 1881,
        genero: "Realismo",
        resumo: "A história de um homem que narra sua vida após a morte, com uma crítica à sociedade brasileira."
        },
        16: {
        titulo: "O Primo Basílio",
        autor: "José de Alencar",
        anoPublicacao: 1862,
        genero: "Realismo",
        resumo: "Uma história de adultério, passionalidade e traição na sociedade carioca do século XIX."
        },
        17: {
        titulo: "Grande Sertão: Veredas",
        autor: "João Guimarães Rosa",
        anoPublicacao: 1956,
        genero: "Modernismo",
        resumo: "Uma narrativa que explora a vida no sertão nordestino, com reflexões filosóficas e psicológicas."
        },
        18: {
        titulo: "O Cortiço",
        autor: "Aluísio Azevedo",
        anoPublicacao: 1890,
        genero: "Naturalismo",
        resumo: "A história de um cortiço no Rio de Janeiro e as vidas entrelaçadas dos moradores."
        }
    };


    module.exports = livros
    
    ```
- Implementamos a configuração do servidor utilizando o Express: arquivo app.js

    ```javaScript
    //ATIVIDADE 1
    // crie um servidor
    // crie um endpoint raiz para a api
    // como resposta do endpoint raiz e o método get exiba uma mensagem no formato JSON contendo as seguintes informações: nome da api, objetivo, autor, versão e data


    // crie um app -> express
    const express = require('express');
    const app = express();
    let livros = require('./dados');
    
    // usar o express.json()
    // conversão do corpo da requisição para um objeto js
    app.use(express.json())

    //descrição para o end-point raiz
    let descricao = {
        nome: 'API LIVROS GT03',
        objetivo: 'gerenciar uma coleção de livros',
        autor: 'Káthia Rocha',
        versao: '1.0.0',
        data: '2024',
        funcao: () => { console.log('funcao') }
    }

    
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

    ```


### 3. Implementação dos Endpoints
#### 3.1. Criar a rota POST
- A rota deve ter o caminho /v1/livros
- Método: POST
- O corpo da requisição será enviado no formato JSON e deve incluir os campos:
    - titulo
    - autor
    - anoPublicacao
    - genero
    - resumo.
- Caso algum desses campos esteja faltando, retorne um erro com status 400 e a mensagem: "Todos os campos são obrigatórios."
- Se o livro for adicionado com sucesso, retorne o status 201 e a mensagem: "Livro adicionado com sucesso!", junto com o ID do livro criado.

#### 3.2. Criar a rota PUT
- Rota: /v1/livros/:id
- Método: PUT
- O ID do livro será passado como parâmetro na URL.
- O corpo da requisição pode conter um ou mais dos seguintes campos para atualizar:
    - titulo
    - autor
    - anoPublicacao
    - genero
    - resumo.
- Caso o ID não exista, retorne um erro com status 404 e a mensagem: "Livro não encontrado."
- Se a atualização for bem-sucedida, retorne o status 200 e a mensagem: "Livro atualizado com sucesso!".

#### 3.3. Criar a rota DELETE
- Rota:/v1/livros/:id
- Método: DELETE
- O ID do livro será passado como parâmetro na URL.
- Caso o ID não exista, retorne um erro com status 404 e a mensagem: "Livro não encontrado."
- Se o livro for deletado com sucesso, retorne o status 200 e a mensagem: "Livro deletado com sucesso!".


### 4. Configuração das camadas de responsabilidade
#### 4.1 Organizar a Estrutura do Projeto.
- Crie os seguintes diretórios na pasta do projeto:
    ```bash
    /models
    /controllers
    /services
    /routes
    ``` 








