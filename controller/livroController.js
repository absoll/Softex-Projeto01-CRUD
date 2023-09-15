import "#diretorioRaiz/constantes.js";
import Livro from "#diretorioRaiz/model/livro.js";
import * as constantes from "#diretorioRaiz/constantes.js";

export const livros = [];
let livro2 = new Livro("nome1", "editora1", "autor1", 1);
livros.push(livro2);

livro2 = new Livro("nome2", "editora2", "autor2", 2);
livros.push(livro2);

class LivroController {
  //Função para listar TODOS os livros. Retorna um vetor contendo todos os livros encontrados
  livroListar() {
    var vetorRetorno = [];
    for (const livro of livros) {
      vetorRetorno.push(livro);
    }
    return vetorRetorno;
  }

  //Função para buscar livros por ID(matricula). Visto ser um dado unico, caso encontre retorna o objeto, caso contrario retorna "undefined"
  livroBuscarID(id) {
    let resultado = constantes.resultadosPosiveis.ERRO_GERAL;
    for (let i = 0; i < livros.length; i++) {
      if (id == livros[i].getMatricula) resultado = livros[i];
    }
    return resultado;
  }

  livroAlterar(objeto, nome, editora, autor) {
    let resultado;
    try {
      objeto.setNome = nome;
      objeto.setEditora = editora;
      objeto.setAutor = autor;
      resultado = constantes.resultadosPosiveis.SUCESSO;
    } catch (error) {
      resultado = constantes.resultadosPosiveis.ERRO_GERAL;
    } finally {
      return resultado;
    }
  }

  livroApagar(id) {
    let resultado;
    try {
      for (const livro of livros) {
        if (livro.getMatricula === id) {
          livros.splice(livros.indexOf(livro), 1);
          resultado = constantes.resultadosPosiveis.SUCESSO;
          break;
        }
      }
    } catch (error) {
      resultado = constantes.resultadosPosiveis.ERRO_GERAL;
    } finally {
      return resultado;
    }
  }

  livroCadastrar(nome, editora, autor) {
    let resultado;
    try {
      let objeto = new Livro(nome, editora, autor);
      livros.push(objeto);
      resultado = constantes.resultadosPosiveis.SUCESSO;
    } catch (error) {
      resultado = constantes.resultadosPosiveis.ERRO_GERAL;
    } finally {
      return resultado;
    }
  }
}

export default LivroController;