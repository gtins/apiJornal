# API de Jornal – Node.js + Express

Este repositório contém a **API de um sistema de jornal**, construída utilizando **Node.js**, **Express** e **MongoDB**. O projeto foi desenvolvido com o objetivo de gerenciar notícias, permitindo a criação, leitura, atualização e exclusão de artigos, além de categorizar essas notícias para facilitar o acesso e a organização.

---

## Objetivos do Projeto

- Implementar uma API para gerenciar notícias de um jornal.
- Aprender a integração com o banco de dados MongoDB para persistir dados.
- Aplicar as melhores práticas de desenvolvimento e organização de código.
- Desenvolver um sistema RESTful utilizando **Express** e **Node.js**.

---

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- Mongoose (para integração do MongoDB com o Node)
- JavaScript

---

## Como Executar 

1. Clone o repositório:

git clone https://github.com/gtins/apiJornal.git

2. Acesse o diretório:
   
cd apiJornal

3. Instale as dependências do projeto:

npm install
Configure a conexão com o MongoDB (local ou Atlas). Não se esqueça de configurar o arquivo .env com a variável MONGODB_URI.

5. Inicie o servidor:

node app.js

6. Acesse a API através do navegador ou ferramentas como Postman ou Insomnia:

http://localhost:3000
