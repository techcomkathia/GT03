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

CREATE TABLE livros (
id_livros INT AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(180) NOT NULL,
fk_autor INT NOT NULL,
ano_publicado YEAR,
resumo TEXT,
FOREIGN KEY (fk_autor) REFERENCES autores (id_autor)
);


create table livros_categorias(
fk_livro int not null,
fk_categoria int not null,
primary key(fk_livro, fk_categoria),
foreign key (fk_livro) references livros(id_livros),
foreign key (fk_categoria) references categorias(id_categoria) 
)

