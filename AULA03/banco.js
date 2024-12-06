// realiza a conexão com o banco de dados

const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    'livraria',// nome do banco de dados
    'root', // nome do usuário
    'km2015km', // senha
    {
        host: 'localhost', // endereço do servidor
        dialect: 'mysql' // dialecte de banco de dados
    }
)

sequelize.authenticate() //método assíncrono que tenta se conectar ao banco de dados
    .then(() => {
        console.log('Conectou ao banco de dados')
    })
    .catch(erro => {
        console.log('Erro ao conectar ao banco de dados')
        console.log(erro)
})
