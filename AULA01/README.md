# AULA01 - Desenvolvimento de uma API com Express

## Descrição da Aula
Nesta aula, criamos uma API simples utilizando o framework **Express** no Node.js. O objetivo principal foi desenvolver endpoints básicos para gerenciar uma coleção de livros, aplicando práticas iniciais de desenvolvimento de APIs RESTful.

---

## Passos Realizados

### 1. Configuração Inicial
- Verificamos a instalação do Node.js e do gerenciador de pacotes **npm**.
- Instalamos o Express com o comando:
  ```bash
  npm install express
  ```

### 2. Estruturação do Projeto
- Criamos um arquivo principal para definir a lógica da API.
- Implementamos a configuração do servidor utilizando o Express

### 3. Implementação dos Endpoints
#### 3.1. Endpoint Raiz
- Rota: /
- Método: GET
- Descrição: Retorna informações sobre a API em formato JSON.
- Resposta:
    ```json
    {
    "nome": "API LIVROS GT03",
    "objetivo": "gerenciar uma coleção de livros",
    "autor": "Káthia Rocha",
    "versao": "1.0.0",
    "data": "2024"
    }
    ```
#### 3.2. Listar Todos os Livros
- Rota: /v1/livros
- Método: GET
- Descrição: Retorna uma lista de todos os livros cadastrados. Caso não haja livros cadastrados, retorna uma mensagem de erro.

- Resposta de Sucesso:
    ```json
    {
    "totalLivros": 3,
    "livros": {
    "1": {"titulo": "Livro A", "autor": "Autor A"},
    "2": {"titulo": "Livro B", "autor": "Autor B"}
    }
    }
    ```

- Resposta de Erro:
    ```json
    {
    "erro": "Nenhum livro cadastrado"
    }
    ```

#### 3.3. Buscar Livro por ID
- Rota: /v1/livros/:id
- Método: GET
- Descrição: Retorna os detalhes de um livro específico pelo seu ID. Caso o ID não exista, retorna uma mensagem de erro.
- Resposta de Sucesso:

    ```json
    {
    "titulo": "Livro A",
    "autor": "Autor A"
    }
    ```

- Resposta de Erro:
    ```json
    {
    "erro": "id inexistente"
    }
    ```


#### 4. Configuração do Servidor
- O servidor foi configurado para rodar na porta 3000.
- Após iniciar o servidor, ele exibe a mensagem no console:
 ```yaml
 API rodando na porta 3000
 ``` 








