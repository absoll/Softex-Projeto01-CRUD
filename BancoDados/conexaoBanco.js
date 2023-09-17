const utils = require("#diretorioRaiz/constantes.js");
const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

class BD {
  constructor(arquivo = utils.enderecoLocalBancoDados) {
    this.arquivo = arquivo;
  }

  conexaoAbrir() {
    //this.db = new sqlite3.Database(":memory:", (err) => {

    /*let arquivoExiste = fs
      .access(this.arquivo, (err) => {
        console.log(`${this.arquivo} ${err ? "does not exist" : "exists"}`);
      })
      .then((data) => {
        console.log("Data: " + data);
      });
    await console.log(await arquivoExiste);
    if ((await arquivoExiste) == null) {
      console.log("verdade");
    } else {
      console.log("falso");
    }*/

    this.db = new sqlite3.Database(this.arquivo, (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Connected to the in-memory SQlite database.");
    });
  }

  conexaoFechar() {
    this.db.close((err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Close the database connection.");
    });
  }
}

/* let teste = new BD();

teste.conexaoAbrir();
teste.conexaoFechar();

console.log(utils.enderecoLocalBancoDados); */

module.exports = BD;
