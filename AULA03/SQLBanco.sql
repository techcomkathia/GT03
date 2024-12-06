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
);


-- populando o banco

INSERT INTO autores (nome, ano_nasc, ano_falec) VALUES 
    ('J.K. Rowling', 1965, NULL), -- 1
    ('Dan Brown', 1964, NULL), -- 2
    ('George R.R. Martin', 1948, NULL); -- 3

INSERT INTO categorias (nome) VALUES 
    ('Fantasia'), -- 1
    ('Suspense'), -- 2
    ('Fantasia Épica'); -- 3
    
INSERT INTO livros (titulo, fk_autor, ano_publicado, resumo) 
VALUES 
    ('Harry Potter e a Pedra Filosofal', 1, 1997, 'A história de um jovem bruxo descobrindo seu destino.'),
    ('O Código Da Vinci', 2, 2003, 'Uma trama de mistério envolvendo a história da arte e conspirações.'),
    ('A Guerra dos Tronos', 3, 1996, 'O início de uma luta pelo poder em um mundo medieval cheio de intrigas.');
    
INSERT INTO livros_categorias (fk_livro, fk_categoria) 
VALUES 
    (1, 1), -- Harry Potter -> Fantasia
    (2, 2), -- O Código Da Vinci -> Suspense
    (3, 3); -- A Guerra dos Tronos -> Fantasia Épica

INSERT INTO livros_categorias (fk_livro, fk_categoria) 
VALUES 
    (1, 3); -- Harry Potter -> Fantasia
    
INSERT INTO livros_categorias (fk_livro, fk_categoria) 
VALUES (1, 1) -- Harry Potter -> Fantasia
