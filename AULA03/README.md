# AULA03 - Desenvolvimento de uma API com Express

## Descrição da Aula
Nesta aula, criaremos o banco de dados para nossa API de livros. Usando mysql e Sequelize, iremos estruturar a persistência de dados no nosso banco. 
---

## Passos Realizados

### 1. Instalação do MySQL
- [Link para download do MySQL](https://dev.mysql.com/downloads/installer/).
- [Tutorial de instalação](https://www.w3schools.com/mysql/mysql_install_windows.asp)
- [Notas de aula MySQL](https://www.notion.so/Banco-de-Dados-adfc8b73edc041738b67fe4b04b08392)


### 2. Estruturação das tabelas
#### 2.1 Criar as tabelas que representem:
 - Autores:
    - id_autor
    - nome 
    - ano_nasc
    - ano_falec

 - Categorias:
    - id_categoria
    - nome_categoria

 - Livros:
    - id_livro
    - titulo
    - id_autor
    - ano_publicacao
    - resumo 

- Livros_categorias:
    - id_livro
    - id_categoria

#### 2.2 Popular o Banco de dados
 Realizar o insert no banco de dados usando linguagem SQL


### 3. Configuração das camadas de responsabilidade
#### 3.1 Organizar a Estrutura do Projeto.
- Crie os seguintes diretórios na pasta do projeto:
    ```bash
    /models
    /controllers
    /services
    /routes
    ``` 
#### 3.2 Detalhamento da função de cada camada 
-  **1 Modelos (/models)**
Responsável pela interação com os dados, seja no banco de dados ou em arquivos. Essa camada contém a estrutura dos dados e operações relacionadas a eles.

-   **2 Serviços (/services)**
Executa a lógica de negócios e atua como uma camada intermediária entre os controladores e os modelos

-  **3 Controladores (/controllers)**
Controla a lógica da aplicação e manipula os dados recebidos das rotas. Invoca os métodos definidos na camada de serviços.

- **4. Rotas (/routes)** 
Define as rotas da API, delegando a lógica para os controladores.



    
### 4. Implementação a organização da camada de Modelo
#### 4.1. Instalar o ORM Sequelize e o MySQL
    
- [Notas de aula sobre o Sequelize](https://www.notion.so/Banco-de-Dados-adfc8b73edc041738b67fe4b04b08392?pvs=4#19e42e5f3eab4b59a56907d943ab4592).

    ```bash
        npm install sequelize mysql2
    ```

#### 4.2. Configuração da conexão do banco de dados
``` javaScript
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'database',
    'username',
    'password', 
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

sequelize.authenticate()
.then(() => {
    console.log('Conexão estabelecida com sucesso.');
})
.catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
});
```

#### 4.3  Criar a representação do modelo das tabelas

- Na camada model faça a representação do modelo de cada uma das tabelas criadas no MySQL. 

- [Notas de aula : Definição dos modelos](https://www.notion.so/Banco-de-Dados-adfc8b73edc041738b67fe4b04b08392?pvs=4#ce98ebade7794dfba1c6faec1b4f585d)










