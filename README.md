# Teste Mestres da Web

## Sobre <a name = "sobre"></a>

Projeto de teste para a empresa Mestres da Web

## Start <a name = "start"></a>

Instruções para realizar a execução em localhost

### Requisitos

Para execução do projeto:

```
postgress
```
```
npm ou yarn
```
```
node.js
```

### Instalação
Clone este repositório em sua máquina
```
git clone https://github.com/Thiago-Mariotto/mestres_web_test.git
```
Vá até o diretório raiz do projeto e faça a instalação das dependencias através do cmd ou gitbash por exemplo

npm:
```
npm i 
```

yarn:
```
yarn
```
Suba o banco postgress e crie um banco com um nome desejado exemplo: "mestres_web"

Você poderá utilizar a query

```
CREATE DATABASE mestres_web;
```

Configure o arquivo ormconfig.json com as informações do banco de dados
```
"host": "sua_url",
"port": "sua_porta",
"username": "seu_username",
"password": "sua_senha",
"database": "seu_banco_de_dados",
```

Execute as migrações do banco de dados pelo terminal para criar as tabelas
```
npm run typeorm migration:run
```

Inicie o servidor:
```
npm run dev
```

## Como utilizar <a name = "utilizando"></a>

Para utilizar as rotas basta acessar a documentação:
```
https://www.getpostman.com/collections/459cfa476d90ab9e8fa2
```