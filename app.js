const express = require('express'); 

const app = express();

//todos os métodos do CRUD (criar, ler, atualizar, excluir)/ (post, get, put, delete)
// vão receber como parâmetro uma rota e um callback ( que vai ser a função que vai ser executada quando o endpoint for chamado )
// requisição de midware
// body parser ( transforma o corpo da requisição em um objeto js e objetos js em json)
app.use(express.json()) 

let descricao = {
    nome: 'api exemplo',
    autor: 'Káthia Rocha',
    versao: '1.0.0',
    data: '2024'
}

app.get('/', (req, resp)=>{
    console.log('Chamou o endpoint raiz, com o método GET');
    // resp.write('api');
    resp.json(descricao);
    resp.end();
})
//para um endpoint específico realizar a leitura de informações

// app.post()
//para um endpoint específico realizar a criação de informações

// app.put()
//para um endpoint específico realizar a atualização de informações

// app.delete()
//para um endpoint específico realizar a exclusão de informações

app.listen(5000)
//cria um servidor local para a porta especificada como parâmetro