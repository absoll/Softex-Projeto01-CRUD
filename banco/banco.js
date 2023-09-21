import * as utils from "#diretorioRaiz/constantes.js";
import * as sqlite from "sqlite";

class Database {
  constructor() {
    this.enderecoBanco = utils.enderecoLocalBancoDados;
    this.abrirConexao();
  }

  async abrirConexao() {
    try {
      this.db = await sqlite.open({
        filename: this.enderecoBanco,
        driver: sqlite.Database,
        mode: sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE
      });
      console.log('Conectado ao banco de dados.');
    } catch (err) {
      console.error(err.message);
      throw err;
    }
  }



  async criarTabelas() {
    try {
      await this.db.run('CREATE TABLE IF NOT EXISTS livros(matricula INTEGER PRIMARY KEY, nome TEXT, editora TEXT, autor TEXT, genero TEXT, preco REAL)');
    } catch (err) {
      throw err;
    }
  }

  async inserirLivro(nome, editora, autor, genero, preco) {
    try {
        await this.db.run('INSERT INTO livros(nome, editora, autor, genero, preco) VALUES (?, ?, ?, ?, ?)', [nome, editora, autor, genero, preco]);
        return utils.resultadosPosiveis.SUCESSO;
    } catch (err) {
        return utils.resultadosPosiveis.ERRO_GERAL;
    }
  }

  async listarLivros() {
    try {
      const livros = await this.db.all('SELECT * FROM livros');
      if (livros.length > 0) {
        return livros;
      } else {
        return 'Nenhum livro cadastrado.'
      }
    } catch (err) {
      return utils.resultadosPosiveis.ERRO_GERAL;
    }
  }

  async buscarPorMatricula(matricula) {
    try {
      const livro = await this.db.get('SELECT * FROM livros WHERE matricula = ?', [matricula]);
      if (livro) {
        return livro;
      } else {
        return "Livro não encontrado!";
      }
    } catch (err) {
        return utils.resultadosPosiveis.ERRO_GERAL;
    }
  }

  async buscarPorNome(nome) {
    try {
      const livros = await this.db.all('SELECT * FROM livros WHERE nome LIKE ?', [`%${nome}%`]);
      if (livros.length > 0) {
        return livros;
      } else {
        return `Nenhum livro com o nome ${nome} encontrado.`;
      }
    } catch (err) {
      return utils.resultadosPosiveis.ERRO_GERAL;
    }
  }

  async alterarLivro(matricula, nome, autor, editora) {
    try {
      const dadosAtualizados = [nome, autor, editora, matricula];
      await this.db.run('UPDATE livros SET nome = ?, autor = ?, editora = ? WHERE matricula = ?', dadosAtualizados);
      return utils.resultadosPosiveis.SUCESSO;
    } catch (err) {
      return utils.resultadosPosiveis.ERRO_GERAL;
    }
  }

  async apagarLivro(matricula) {
    try {
      await this.db.run('DELETE FROM livros WHERE matricula = ?', [matricula]);
      return utils.resultadosPosiveis.SUCESSO;
    } catch (err) {
      return utils.resultadosPosiveis.ERRO_GERAL;
    }
  }
}

export default Database;


const db = new Database();
await db.abrirConexao();
await db.criarTabelas();

const resultado = await db.inserirLivro("teste","teste","teste","teste",123);

console.log(resultado);


