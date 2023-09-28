import { resultadosPossiveisBD } from "#diretorioRaiz/constantes";
import BancoDados from "#diretorioRaiz/banco/BDConexao";

//classe "Tabelas" que herda os dados de "BancoDados"
class BDTabelas extends BancoDados {
  constructor() {
    super();
  }

  //Função assincrona para criar as tabelas no dispositivo local
  async criarTabelas(): Promise<resultadosPossiveisBD> {
    let retorno: resultadosPossiveisBD = resultadosPossiveisBD?.ERRO_GERAL;
    try {
      await this.conexaoAbrir();
      await this.livros();
      await this.conexaoFechar();
      retorno = resultadosPossiveisBD.SUCESSO;
    } catch (error) {
      retorno = resultadosPossiveisBD.CRIACAO_TABELA_ERRADA;
    } finally {
      return retorno;
    }
  }

  //tabela Livro
  async livros(): Promise<resultadosPossiveisBD> {
    let retorno: resultadosPossiveisBD = resultadosPossiveisBD.ERRO_GERAL;
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
      retorno = resultadosPossiveisBD.SUCESSO;
    } catch (error) {
      console.log(error);
      retorno = resultadosPossiveisBD.CRIACAO_TABELA_ERRADA;
    } finally {
      return retorno;
    }
  }
}

//função assincrona e anonima vazia, se auto-chamando, para ser executada ao chamar o nome do arquivo no
//Importar. Ela faz o trabalho de apenas criar o banco localmente e criar as tabelas locais

export default async () => {
  let criarTabelas: BDTabelas = new BDTabelas();

  await criarTabelas.criarTabelas();
};

console.log("teste BDTabelas");
