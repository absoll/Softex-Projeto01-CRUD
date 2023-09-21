import "#diretorioRaiz/constantes.js";
import Livro from "#diretorioRaiz/model/livroModel.js";
import LivroBD from "#diretorioRaiz/banco/BDLivro.js";
import * as constantes from "#diretorioRaiz/constantes.js";

class LivroController {
  constructor() {
    this.LivroBD = new LivroBD();
  }
  //Função para listar TODOS os livros. Retorna um vetor contendo todos os livros encontrados
  async livroListar() {
    let retorno = [];
    try {
      //recebe os dados vindo do banco
      let dados = await this.LivroBD.listarTodos();
      //se o dado recebido for do tipo OBJECT, então a operação foi um sucesso e ele vai começar a criar objetos tipo Livro
      // para serem enviados para o VIEW e ele mostrar na tela
      if (typeof dados == "object") {
        for (let i = 0; i < dados.length; i++) {
          let temporario = new Livro();
          //o SQLite devolve o objeto como JSON, entao tem q transformar o objeto em Livro antes de enviar ao VIEW
          temporario.JSONparaCLASSE(dados[i]);
          retorno.push(temporario);
        }
      } else {
        retorno = dados;
      }
    } catch (error) {
      console.log(error);
      retorno = constantes.resultadosPosiveis.ERRO_GERAL;
    } finally {
      return retorno;
    }
  }

  //Função para buscar livros por ID(matricula). Visto ser um dado unico, caso encontre retorna o objeto, caso contrario retorna "ERRO_GERAL"
  async livroBuscarID(id) {
    let retorno = [];
    try {
      let dados = await this.LivroBD.buscarMatricula(id);

      if (typeof dados == "object") {
        let temporario = new Livro();
        temporario.JSONparaCLASSE(dados[0]);
        retorno.push(temporario);
      } else {
        retorno = dados;
      }
    } catch (erro) {
      console.log(error);
      retorno = constantes.resultadosPosiveis.ERRO_GERAL;
    } finally {
      return retorno;
    }
  }

  //Função buscar livro por NOME. No caso do nome, pode ocorrer de livros diferentes terem o mesmo nome,
  //então ele retorna 0, 1 ou varios objetos
  async livroBuscarNome(nome) {
    let retorno = [];
    try {
      //A primeira letra de cada nome esta maiuscula, entao deve fazer o mesmo procedimento antes de pesquisar
      //nome = constantes.primeiraLetraMaiuscula(nome);
      let dados = await this.LivroBD.buscarNome(nome);

      if (typeof dados == "object") {
        for (let i = 0; i < dados.length; i++) {
          let temporario = new Livro();
          temporario.JSONparaCLASSE(dados[i]);
          retorno.push(temporario);
        }
      } else {
        retorno = dados;
      }
    } catch (erro) {
      console.log(error);
      retorno = constantes.resultadosPosiveis.ERRO_GERAL;
    } finally {
      return retorno;
    }
  }

  //Função responsavel por alterar de fato as informações do livro.
  // Como o objeto ja foi buscado anteriormente e se verificou a existencia dele, uma copia desse objeto é repassada
  // para ter os dados modificados
  async livroAlterar(objeto, nome, editora, autor, genero, preco) {
    let retorno;
    try {
      objeto.setNome = constantes.primeiraLetraMaiuscula(nome);
      objeto.setEditora = constantes.cadaPalavraMaisucula(editora);
      objeto.setAutor = constantes.cadaPalavraMaisucula(autor);
      objeto.setGenero = constantes.primeiraLetraMaiuscula(genero);
      objeto.setPreco = preco;

      let dados = await this.LivroBD.alterar(objeto);

      if (dados === constantes.resultadosPosiveisBD.SUCESSO)
        //Caso ocorra tudo certo, retorna o valor constante de "SUCESSO"
        retorno = constantes.resultadosPosiveis.SUCESSO;
      else {
        retorno = dados;
      }
    } catch (error) {
      //Caso ocorra algum erro, aqui esse erro seria tratado e de acordo com ele iria gerar uma resposta diferente
      // para cada erro.
      console.log(error);
      retorno = constantes.resultadosPosiveis.ERRO_GERAL;
    } finally {
      return retorno;
    }
  }

  //Função responsavel por de fato apagar um livro armazenado
  async livroApagar(id) {
    let retorno;
    try {
      let dados = await this.LivroBD.deletar(id);

      if (dados === constantes.resultadosPosiveisBD.SUCESSO)
        retorno = constantes.resultadosPosiveis.SUCESSO;
      else retorno = constantes.resultadosPosiveis.ERRO_GERAL;
    } catch (error) {
      console.log(error);
      retorno = constantes.resultadosPosiveis.ERRO_GERAL;
    } finally {
      return retorno;
    }
  }

  //Função responsavel por adicionar um livro
  async livroCadastrar(nome, editora, autor, genero, preco) {
    let retorno;
    try {
      //Visto ser dados apenas de Livros, apenas esses objetos são armazenados. Sendo assim, a cada nova informação
      // inserida pelo usuario, um novo objeto é criado e armazenado
      let objeto = new Livro(
        0,
        constantes.primeiraLetraMaiuscula(nome),
        constantes.cadaPalavraMaisucula(editora),
        constantes.cadaPalavraMaisucula(autor),
        constantes.primeiraLetraMaiuscula(genero),
        preco
      );

      let dados = await this.LivroBD.adicionar(objeto);

      if (dados === constantes.resultadosPosiveisBD.SUCESSO)
        retorno = constantes.resultadosPosiveis.SUCESSO;
      else retorno = constantes.resultadosPosiveis.ERRO_GERAL;
    } catch (error) {
      console.log(error);
      retorno = constantes.resultadosPosiveis.ERRO_GERAL;
    } finally {
      return retorno;
    }
  }
}

export default LivroController;
