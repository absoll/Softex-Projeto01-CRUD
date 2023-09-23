# Projeto do modulo de Javascript(Back-end) da Formação Acelerada em Software(FAP) da Softex

## Resumo

Projeto para gerenciamento de livraria, desenvolvido em JS com Node.JS e com banco de dados (SQlite). Sua execução é através do comando "npm run start". Está dividido em 4 partes: visualizar, controlador, modelo e o banco de dados.

## Introdução

O projeto teve como finalidade mostrar o conhecimento adquirido durante o módulo de Javascript (JS) com o desenvolvimento de um [Create-Read-Update-Delete (CRUD)](https://developer.mozilla.org/pt-BR/docs/Glossary/CRUD) de um tema livre decidido por cada grupo. Esse repositório representa o trabalho final de um CRUD de uma possivel livraria para livros, desenvolvido em JS utlizando o [NodeJS](https://nodejs.org/en/about) com banco de dados [(SQlite)](https://www.sqlite.org/about.html).

## Execução

O projeto deve ser executado utilizando o script **START**, dessa forma deve-se inciar com [**npm run start**](https://github.com/absoll/Softex-Projeto01-CRUD/blob/main/package.json#L10), em vez do tradicionar **node main.js**. Esse metodo é necessário devido a alguns problemas com a biblioteca **readline-sync** não aceitar caracteres especiais na sua execução.

Esse script executa o [**chpcp 65001**](https://ss64.com/nt/chcp.html) antes de executar de fato o projeto, assim permite que o console possa mostrar corretamente os caractreres especiais como Ç, Ã, É dentre outros.

## Estrutura do Projeto

A estrutura do código segue o padrão [**Model-View-Controller (MVC)**](https://www.devmedia.com.br/introducao-ao-padrao-mvc/29308), muito utilizada no desenvolvimento de softwares. Além dessa, há uma quarta parte que é **Banco** de dados.

### [View](https://github.com/absoll/Softex-Projeto01-CRUD/tree/main/view)

Consiste em toda a parte visual do trabalho. Toda a interação realizada com o usuario é realizada aqui, local aonde ficam todos os **readline.question** e **console.log**. O resultado obtido do Controller também é executado aqui, mostrando ao usuário o sucesso ou falha na realização da sua ação.

### [Controller](https://github.com/absoll/Softex-Projeto01-CRUD/tree/main/controller)

Aonde ocorre a maior troca de dados de toda a aplicação. O **Controller** recebe os dados do usuario através da View e com essa informação executa a operação requerida pelo usuario, acessando a comunicação com o Banco de dados e trabalhando com os objetos necessarios.

### [Model](https://github.com/absoll/Softex-Projeto01-CRUD/tree/main/model)

Armazena as classes dos objetos que serão utilizados no projeto, bem como as ações que cada um deles pode executar. Uma informação relevante aqui é a forma que o JS declara [atributos privados](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields) através de # (hash names). [Exemplo.](https://github.com/absoll/Softex-Projeto01-CRUD/blob/main/model/livroModel.js#L13)

### [Banco](https://github.com/absoll/Softex-Projeto01-CRUD/tree/main/banco)

Pasta que contem toda a manipulação com o banco de dados, todo o CRUD em SQLite é realizado nesse local. Um detalhe importante aqui é em relação a manipulação da biblioteca [SQLite3](https://www.npmjs.com/package/sqlite3), que foi portada de forma similar a original desenvolvida em C. Essa biblioteca, infelizmente, suporta apenas a utilização de [Promises](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise) e não funções [assincronas](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function) propriamente. Devido a isso, uma segunda biblioteca [SQLite](https://www.npmjs.com/package/sqlite) foi instalada para facilitar a manipulação do banco utilizando funções assincronas.

## Informações Extras

Dois detalhes peculiares sobre o projeto ainda podem ser ditos:

- O primeiro em relação aos retornos do [Try/catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch), o trabalho não esta tratando todos os erros de forma especifica, como deveria em um projeto real, mas utiliza uma numeração para erros que podem ser visualizadas em [constantes](https://github.com/absoll/Softex-Projeto01-CRUD/blob/main/constantes.js)
- O segundo detalhe importante em relação aos [imports](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import). Foi utilizado um import especifico, vindo do arquivo raiz, assim, independendo do local que o arquivo tiver, pode ser utilizado um caminho absoluto vindo da pasta raiz(root) utilizando uma variavel escolhida chamada [#diretorioRaiz](https://github.com/absoll/Softex-Projeto01-CRUD/blob/main/package.json#L15-L18), isso evita possuir imports no qual se deve voltar varios niveis (../../../..)

## Membros do Grupo

[Francisco Torres](https://github.com/absoll)
[Gabriel Mendes](https://github.com/GabrielMendes94)
[Iara Monte](https://github.com/IaraLMonte)
[Matheus Santana](https://github.com/matheusfsantana)
