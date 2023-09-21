import { resultadosPosiveisBD } from "#diretorioRaiz/constantes.js";
import BancoDados from "#diretorioRaiz/banco/BDConexao.js";

//classe "Tabelas" que herda os dados de "BancoDados"
class BDTabelas extends BancoDados {
  constructor() {
    super();
  }

  //Função assincrona para criar as tabelas no dispositivo local
  async criarTabelas() {
    try {
      await this.conexaoAbrir();
      await this.livros();
      await this.conexaoFechar();
    } catch (error) {
      return resultadosPosiveisBD.CRIACAO_TABELA_ERRADA;
    }
  }

  //tabela Livro
  async livros() {
    try {
      await this.BD.run(`
      CREATE TABLE IF NOT EXISTS 
          livros(
              matricula INTEGER PRIMARY KEY, 
              nome TEXT, 
              editora TEXT, 
              autor TEXT, 
              genero TEXT, 
              preco REAL)
      `);
    } catch (error) {
      console.log(error);
      return resultadosPosiveisBD.CRIACAO_TABELA_ERRADA;
    }
  }
}

//função assincrona e anonima vazia, se auto-chamando, para ser executada ao chamar o nome do arquivo no
//Importar. Ela faz o trabalho de apenas criar o banco localmente e criar as tabelas locais
export default (async () => {
  let criarTabelas = new BDTabelas();

  criarTabelas.criarTabelas();
})();
