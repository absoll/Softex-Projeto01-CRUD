import "#diretorioRaiz/constantes.js";
import Livro from "#diretorioRaiz/model/livroModel.js";
import * as constantes from "#diretorioRaiz/constantes.js";

export const livros = [];
let livro2 = new Livro(1, "Nome1", "Editora1", "Autor1", "Genero1", 29.99);
livros.push(livro2);

livro2 = new Livro(2, "Nome2", "Editora2", "Autor2", "Genero2", 39.99);
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
    try {
      var resultado = [];
      for (let i = 0; i < livros.length; i++) {
        if (id == livros[i].getMatricula) {
          resultado.push(livros[i]);
          break;
        }
      }
    } catch (erro) {
      resultado = constantes.resultadosPosiveis.ERRO_GERAL;
    } finally {
      return resultado;
    }
  }

  //Função buscar livro por NOME. No caso do nome, pode ocorrer de livros diferentes terem o mesmo nome,
  //então ele retorna 0, 1 ou varios objetos
  livroBuscarNome(nome) {
    try {
      var resultado = [];
      nome = constantes.primeiraLetraMaiuscula(nome);
      for (let i = 0; i < livros.length; i++) {
        if (nome == livros[i].getNome) {
          //cria um vetor de livros para devolver ao VIEW
          resultado.push(livros[i]);
        }
      }
    } catch (erro) {
      resultado = constantes.resultadosPosiveis.ERRO_GERAL;
    } finally {
      return resultado;
    }
  }

  //Função responsavel por alterar de fato as informações do livro.
  // Como o bjeto ja foi buscado anteriormente e se verificou a existencia dele, uma copia desse objeto é repassada
  // para ter os dados modificados
  livroAlterar(objeto, nome, editora, autor, genero, preco) {
    let resultado;
    try {
      objeto.setNome = constantes.primeiraLetraMaiuscula(nome);
      objeto.setEditora = constantes.cadaPalavraMaisucula(editora);
      objeto.setAutor = constantes.cadaPalavraMaisucula(autor);
      objeto.setGenero = constantes.primeiraLetraMaiuscula(genero);
      objeto.setPreco = preco;

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
  livroCadastrar(nome, editora, autor, genero, preco) {
    let resultado;
    try {
      //Visto ser dados apenas de Livros, apenas esses objetos são armazenados. Sendo assim, a cada nova informação
      // inserida pelo usuario, um novo objeto é criado e armazenado
      let objeto = new Livro(
        //Responsavel por pegar a MATRICULA do ultimo elemento armazenado e somar +1, assim gerando um incrementador
        livros[livros.length - 1].getMatricula + 1,
        constantes.primeiraLetraMaiuscula(nome),
        constantes.cadaPalavraMaisucula(editora),
        constantes.cadaPalavraMaisucula(autor),
        constantes.primeiraLetraMaiuscula(genero),
        preco
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
