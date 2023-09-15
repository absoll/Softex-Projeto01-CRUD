const utils = require("#diretorioRaiz/constantes.js");
const BDConexao = require("#diretorioRaiz/BancoDados/conexaoBanco.js");

class LivrosBD extends BDConexao {
  //constructor() {}

  async livrosBDInserir() {
    await this.conexaoAbrir();
    await this.db
      .run("CREATE TABLE langs(name text)")

      //this.db.run(`INSERT INTO langs(name) VALUES(?)`, ["C"], function (err) {
      .run(`INSERT INTO langs(name) VALUES(?)`, ["C"], function (err) {
        if (err) {
          return console.log(err.message);
        }
        // get the last insert id
        console.log(`A row has been inserted with rowid ${this.lastID}`);
      });

    this.conexaoFechar();
  }
}

let teste = new LivrosBD();

console.log("teste");
teste.livrosBDInserir();
