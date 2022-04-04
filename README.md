# Boas vindas ao Projeto Full Stack Cars

Este projeto cria API e endpoints para manipulação de dados e renderização através da conexão com a aplicação front end.

## Funcionalidades da aplicação

Cria banco de dados List Of Cars, com informações sobre as marcas, modelos e versões de veículos.
Desenvolvida para interagir com o banco de dados, hospedado remotamente, retornando API com todos os dados armazenados na tabela Cars ao realizar consulta (GET) a rota /cars.
Arquitetura do back end sobre estrutura de camadas, sendo a camada se controller e models funcionais e aplicadas, a camada service passará por reestruturação em breve.

### Tecnologias utilizadas

A aplicação consiste no desenvolvimento com `Node.js` do back-end, utilizando o pacote `sequelize` do `npm`, criando e associando tabelas usando `models` do `sequelize`. 
A aplicação esta desenvolvimento, criando `CRUD` (Create, Read, Update and Delete) de `API`, sendo apresentado a fase de Read.

### Acesso ao Deploy completo do projeto

Realizado deploy da aplicação Front End na plataforma Heroku e disponível em:
* https://listofcarsfrontend.herokuapp.com/cars

## Para rodar a aplicação localmente

1. Clone o repositório, com o comando:
* `git@github.com:welcksonvalentim/listOfCarsBackEnd.git`

2. Entre na pasta do repositório que você acabou de clonar:
* `cd listOfCarsBackEnd`

3. Instale as dependências e inicialize o projeto:
* `npm install`

4. Inicialize o projeto:
* `npm start`

4. Utilize simuladores de requisição (exemplo: Insomnia):
* Faça requisição do tipo `GET` para: `http://localhost:3000/cars`
