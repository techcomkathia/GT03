CREATE DATABASE livraria;

use livraria;

CREATE TABLE autores (
id_autor INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(50) NOT NULL,
ano_nasc YEAR NOT NULL,
ano_falec YEAR
);

CREATE TABLE categorias (
id_categoria INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(30)
);


