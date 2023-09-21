import { resultadosPosiveisBD } from "#diretorioRaiz/constantes.js";
import BancoDados from "#diretorioRaiz/banco/BDConexao.js";

//Classe responsavel por fazer toda a interacao de LIVROS com o banco de dados
export default class BDLivro extends BancoDados {
  constructor() {
    super();
  }

  //Função responsavel por adicionar um livro no banco
  async adicionar(livro) {
    let resultado;
    try {
      //abrindo a conexao com o banco, para em seguida realizar a operação
      await this.conexaoAbrir();
      //realiza a operação. Nessa função esta realizando uma adição de elemento ao banco
      await this.BD.run(
        `INSERT INTO livros
        (nome, editora, autor, genero, preco) 
        VALUES 
        (?, ?, ?, ?, ?)`,
        [
          livro.getNome,
          livro.getEditora,
          livro.getAutor,
          livro.getGenero,
          livro.getPreco,
        ]
      );
      //fecha a conexao com o banco
      await this.conexaoFechar();
      //caso chegue nesse ponto, significa que a operação foi um sucesso e atribui o valor de sucesso ao resultado
      resultado = resultadosPosiveisBD.SUCESSO;
    } catch (error) {
      //aqui ficaria o tratamento de erros, no caso como nao esta tratando erros especificos no projeto, retorna apenas ERRO_GERAL
      console.log(error);
      resultado = resultadosPosiveisBD.ERRO_GERAL;
    } finally {
      return resultado;
    }
  }

  //Função responsavel por listar todos os livros do banco
  async listarTodos() {
    let resultado = [];
    try {
      await this.conexaoAbrir();
      resultado = await this.BD.all(`SELECT * FROM livros`);
      await this.conexaoFechar();
    } catch (error) {
      //console.log(error);
      resultado = resultadosPosiveisBD.ERRO_GERAL;
    } finally {
      return resultado;
    }
  }

  //Função responsavel por realizar uma busca no banco utilizando a matricula
  async buscarMatricula(matricula) {
    let resultado = [];
    try {
      await this.conexaoAbrir();
      resultado = await this.BD.all(
        `SELECT * FROM livros 
            WHERE matricula = ?`,
        [matricula]
      );
      await this.conexaoFechar();
    } catch (error) {
      console.log(error);
      resultado = resultadosPosiveisBD.ERRO_GERAL;
    } finally {
      return resultado;
    }
  }

  //Função responsavel por realizar uma busca no banco por NOME
  async buscarNome(nome) {
    let resultado = [];
    try {
      await this.conexaoAbrir();
      resultado = await this.BD.all(
        `SELECT * FROM livros 
            WHERE nome = ?`,
        [nome]
      );
      await this.conexaoFechar();
    } catch (error) {
      console.log(error);
      resultado = resultadosPosiveisBD.ERRO_GERAL;
    } finally {
      return resultado;
    }
  }

  //Função responsavel por alterar uma informação na tabela
  async alterar(livro) {
    let resultado;
    try {
      await this.conexaoAbrir();
      resultado = await this.BD.run(
        `
            UPDATE livros 
                SET nome = ?, 
                    autor = ?, 
                    editora = ?, 
                    genero = ?, 
                    preco = ?
                WHERE matricula = ?`,
        [
          livro.getNome,
          livro.getAutor,
          livro.getEditora,
          livro.getGenero,
          livro.getPreco,
          livro.getMatricula,
        ]
      );
      await this.conexaoFechar();
      resultado = resultadosPosiveisBD.SUCESSO;
    } catch (error) {
      console.log(error);
      resultado = resultadosPosiveisBD.ERRO_GERAL;
    } finally {
      return resultado;
    }
  }

  //função responsavel por apagar um dado da tabela
  async deletar(matricula) {
    let resultado;
    try {
      await this.conexaoAbrir();
      resultado = await this.BD.run(
        `
            DELETE FROM livros 
                WHERE matricula = ?`,
        [matricula]
      );
      await this.conexaoFechar();
      resultado = resultadosPosiveisBD.SUCESSO;
    } catch (error) {
      console.log(error);
      resultado = resultadosPosiveisBD.ERRO_GERAL;
    } finally {
      return resultado;
    }
  }
}
