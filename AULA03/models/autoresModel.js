const {DataTypes} = require('sequelize')
//trazer a conexão com o banco de dados
const sequelize = require('../banco')

const Autores = sequelize.define('autores', {
    id_autor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ano_nasc: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ano_falec: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
})