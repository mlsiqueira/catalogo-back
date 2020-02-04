# Catálogo de filmes

Desenvolver uma aplicação simples que implemente um sistema Web de catálogo de filmes. A aplicação deve permitir que o Usuário cadastre filmes, veja a lista de filmes cadastrados e altere as informações dos filmes cadastrado. A aplicação também deve permitir que o usuário cadastre atores e diretores, e que possa associa-los aos filmes.
É importante que o candidato implemente a aplicação utilizando, sempre que possível, as tecnologias descritas na vaga.
Ao finalizar o desenvolvimento, envie o projeto para um repositório do GitHub e nos envie o link.

## Sobre o projeto

Utilizei Angular 8, Sequelize, express e MariaDB.

O código fonte do front Angular está disponível em : [https://github.com/mlsiqueira/catalogo-front](https://github.com/mlsiqueira/catalogo-front).

## Instalação:

1. Criar um banco de dados chamada `catalogo` (_Obs.: utilizei MariaDB_);

2. opcional: editar o arquivo `server/config/database.js`e passar uma senha, usuário e outros dados (_opção mais fácil ao utilizar docker, por exemplo_):

```js
// database.js
module.exports = {
  database: 'catalogo',
  username: 'mauro',
  password: '7531',
  host: 'localhost',
  dialect: 'mariadb'
}
```

3. instalar as dependências e rodar migrations e seeds:

```zsh
npm i
sequelize db:migrate
sequelize db:seed:all
```
