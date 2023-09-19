import "#diretorioRaiz/constantes.js";
import Livro from "#diretorioRaiz/model/livroModel.js";
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

  //Função para buscar livros por ID(matricula). Visto ser um dado unico, caso encontre retorna o objeto, caso contrario retorna "ERRO_GERAL"
  livroBuscarID(id) {
    let resultado = constantes.resultadosPosiveis.ERRO_GERAL;
    for (let i = 0; i < livros.length; i++) {
      if (id == livros[i].getMatricula) resultado = livros[i];
    }
    return resultado;
  }

  //Função responsavel por alterar de fato as informações do livro.
  // Como o bjeto ja foi buscado anteriormente e se verificou a existencia dele, uma copia desse objeto é repassada
  // para ter os dados modificados
  livroAlterar(objeto, nome, editora, autor) {
    let resultado;
    try {
      objeto.setNome = nome;
      objeto.setEditora = editora;
      objeto.setAutor = autor;

      //Caso ocorra tudo certo, retorna o valor constante de "SUCESSO"
      resultado = constantes.resultadosPosiveis.SUCESSO;
    } catch (error) {
      //Caso ocorra algum erro, aqui esse erro seria tratado e de acordo com ele iria gerar uma resposta diferente
      // para cada erro.
      resultado = constantes.resultadosPosiveis.ERRO_GERAL;
    } finally {
      return resultado;
    }
  }

  //Função responsavel por de fato apagar um livro armazenado
  livroApagar(id) {
    let resultado;
    try {
      for (const livro of livros) {
        if (livro.getMatricula === id) {
          //SPLICE utilizado para cortar 1 posicao a frente, começando pela posição do livro desejado, então, irá apagar apenas ele
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

  //Função responsavel por adicionar um livro
  livroCadastrar(nome, editora, autor) {
    let resultado;
    try {
      //Visto ser dados apenas de Livros, apenas esses objetos são armazenados. Sendo assim, a cada nova informação
      // inserida pelo usuario, um novo objeto é criado e armazenado
      let objeto = new Livro(
        nome,
        editora,
        autor,
        //Responsavel por pegar a MATRICULA do ultimo elemento armazenado e somar +1, assim gerando um incrementador
        livros[livros.length - 1].getMatricula + 1
      );
      //armazena o objeto Livro
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
