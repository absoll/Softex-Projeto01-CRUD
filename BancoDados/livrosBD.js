const utils = require("#diretorioRaiz/constantes.js");
const BDConexao = require("#diretorioRaiz/BancoDados/conexaoBanco.js");

class LivrosBD extends BDConexao {
  constructor() {
    super();
    this.conexaoAbrir();
  }

  livrosBDInserir() {
    //  await this.conexaoAbrir();

    // await this.criarBanco();
    //this.db.run(`INSERT INTO langs(name) VALUES(?)`, ["C"], function (err) {
    this.db.run(`INSERT INTO langs(name) VALUES(?)`, ["C"], function (err) {
      if (err) {
        return console.log(err.message);
      }
      // get the last insert id
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    });
    //);

    //  await this.conexaoFechar();
    // return "ok";
  }

  criarTabelas() {
    /*TABELA LIVRO
    CREATE TABLE livro (
        Matricula INTEGER,
        Nome TEXT,
        Editora TEXT,
        Autor TEXT,
        PRIMARY KEY(Matricula)
    );

    */
    //this.conexaoAbrir();
    this.db.run(
      `CREATE TABLE livro (
        Matricula INTEGER,
        Nome TEXT,
        Editora TEXT,
        Autor TEXT,
        PRIMARY KEY(Matricula)
    )`,
      function (err) {
        if (err) {
          return console.log(err.message);
        }
        console.log(`criou tabela`);
      }
    );
  }

  criarTabelasTeste() {
    // this.conexaoAbrir();
    this.db.run("CREATE TABLE langs(name text)", function (err) {
      if (err) {
        return console.log(err.message);
      }
      // get the last insert id
      console.log(`tabela criada}`);
    });
  }
}

function teste() {
  let teste1 = new LivrosBD();

  console.log("teste1");
  teste1.criarTabelasTeste();
  teste1.livrosBDInserir();
  teste1.conexaoFechar();
}

teste();
