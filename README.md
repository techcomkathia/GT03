# GT03

Link para o material complementar: https://dust-starburst-c57.notion.site/Desenvolvimento-Back-End-JavaScript-5038d9fff41d45688f698f7d88a5a19e


# Projeto: API de Livros

## Descrição

Uma API para gerenciar uma coleção de livros, com o objetivo de compreender melhor o uso do Node, Express, Sequelize e recursos de autenticação  
- Cada chave representa o ID único de um livro.
- Os valores são objetos contendo as informações do livro.

---

## Tecnologias Utilizadas

- **Node.js**
- **Express**

---

## Estrutura Inicial dos Dados

```javascript
const livros = {
  "1": {
    "titulo": "Dom Quixote",
    "autor": "Miguel de Cervantes",
    "anoPublicacao": 1605,
    "genero": "Romance",
    "resumo": "A história de um cavaleiro e seu fiel escudeiro."
  },
  "2": {
    "titulo": "1984",
    "autor": "George Orwell",
    "anoPublicacao": 1949,
    "genero": "Distopia",
    "resumo": "Uma reflexão sobre um futuro totalitário."
  }
};
```
# Endpoints da API de Livros

## **1. Listar todos os livros**

- **Descrição**: Retorna uma lista com todos os livros cadastrados.  
- **Método**: `GET`  
- **Rota**: `/v1/livros`  
- **Headers**: Nenhum.  
- **Respostas**:
  - **Status 200 (OK)**:
    ```json
    {
      "1": { "titulo": "Dom Quixote", "autor": "Miguel de Cervantes", "anoPublicacao": 1605, "genero": "Romance", "resumo": "A história de um cavaleiro e seu fiel escudeiro." },
      "2": { "titulo": "1984", "autor": "George Orwell", "anoPublicacao": 1949, "genero": "Distopia", "resumo": "Uma reflexão sobre um futuro totalitário." }
    }
    ```

---

## **2. Obter livro por ID**

- **Descrição**: Retorna as informações de um livro específico.  
- **Método**: `GET`  
- **Rota**: `/v1/livros/:id`  
- **Headers**: Nenhum.  
- **Parâmetros**:
  - `:id` (obrigatório): ID do livro.  
- **Respostas**:
  - **Status 200 (OK)**:
    ```json
    { "titulo": "Dom Quixote", "autor": "Miguel de Cervantes", "anoPublicacao": 1605, "genero": "Romance", "resumo": "A história de um cavaleiro e seu fiel escudeiro." }
    ```
  - **Status 404 (Not Found)**:
    ```json
    { "mensagem": "Livro não encontrado." }
    ```

---

## **3. Adicionar um novo livro**

- **Descrição**: Adiciona um novo livro à coleção.  
- **Método**: `POST`  
- **Rota**: `/v1/livros`  
- **Headers**:
  - `Content-Type: application/json`  
- **Body (Payload)**:
  ```json
  {
    "titulo": "Novo Livro",
    "autor": "Autor Exemplo",
    "anoPublicacao": 2024,
    "genero": "Ficção",
    "resumo": "Resumo do livro."
  }
- **Respostas**:
  - **Status 201 (Created)**:
    ```json
    { "mensagem": "Livro adicionado com sucesso.", "id": 3, "livro": { "titulo": "Novo Livro", "autor": "Autor Exemplo", "anoPublicacao": 2024, "genero": "Ficção", "resumo": "Resumo do livro." } }

    ```
  - **Status 400 (Bad Request):**:
    ```json
    { "mensagem": "Todos os campos são obrigatórios." }

    ```

---









