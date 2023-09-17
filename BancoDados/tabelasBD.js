const BDConexao = require("#diretorioRaiz/BancoDados/conexaoBanco.js");

// criar tabelas no SQLite
// https://www.sqlitetutorial.net/sqlite-create-table/

class TabelasBD extends BDConexao {
  constructor() {
    super();
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
    this.conexaoAbrir();
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
}
/* TODAS AS TABELAS

CREATE TABLE livro (
   Matricula INTEGER,
   Nome TEXT,
   Editora TEXT,
   Autor TEXT,
   PRIMARY KEY(Matricula)
);

*/

let teste = new TabelasBD();

teste.criarTabelas();
