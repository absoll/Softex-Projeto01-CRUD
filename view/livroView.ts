let leitor = require("readline-sync");
import LivroController from "#diretorioRaiz/controller/livroController";
import * as constantes from "#diretorioRaiz/constantes";
import Livro from "#diretorioRaiz/model/livroModel";

class LivroView {
  #LivroController
  //Construtor da classe. Ele irá inicializar uma unica instancia da classe Controller, que irá manipular os dados
  constructor() {
    this.#LivroController = new LivroController();
  }

  //função responsavel por listar todos os livros cadastrados
  async listarTodos() {
    let resultado:Array<Livro> | constantes.errosPossiveis = await this.#LivroController.livroListar();
    //console.log("Teste "+ resultado)
    if (typeof resultado === "object") {
      if (resultado.length > 0) {
        console.log("----- LISTANDO TODOS OS LIVROS ----");
        //FOR para mostrar os dados que vinheram do controller
        for (const livro of resultado) {
          console.log(`Matricula: ${livro.getMatricula}`);
          console.log(`Nome: ${livro.getNome}`);
          console.log(`Editora: ${livro.getEditora}`);
          console.log(`Autor: ${livro.getAutor}`);
          console.log(`Genero: ${livro.getGenero}`);
          console.log(`Preço: ${livro.getPreco}\n`);
        }
      } else {
        console.log("Nenhum livro cadastrado");
      }
    } else {
      console.log("Erro ao listar os livros. Codigo do erro: " + resultado);
    }
    console.log("Aperte qualquer tecla para voltar ao menu...");
    leitor.keyIn(); //Fica aguardando o usuario digitar qualquer tecla para prosseguir
  }

  //Função responsavel por cadastrar um unico livro. Matricula não é passada, ela é gerada automatica
  async cadastrar() {
    console.log("----- CADASTRO DE LIVRO -----");
    let nome = leitor.question("Nome: ");
    let editora = leitor.question("Editora: ");
    let autor = leitor.question("Autor: ");
    let genero = leitor.question("Genero: ");
    let preco = leitor.questionFloat("Preço: ");

    //passa os dados para o controlador
    let resultado:constantes.errosPossiveis = await this.#LivroController.livroCadastrar(
      nome,
      editora,
      autor,
      genero,
      preco
    );

    //verifica o resultado vindo do controller
    if (resultado === constantes.resultadosPossiveis.SUCESSO)
      console.log("Livro cadastrado com sucesso!");
    else {
      console.log("Erro ao cadastrar o livro");
    }
    console.log("Aperte qualquer tecla para voltar ao menu...");
    leitor.keyIn();
  }

  //Função buscar por ID (matricula)
  async buscarID() {
    // opção para buscar apenas 1 elemento por ID
    let id:number = leitor.questionInt(
      "Digite o numero de matricula do livro a ser buscado: \n"
    );

    let resultado:Array<Livro> | constantes.errosPossiveis = await this.#LivroController.livroBuscarID(id);

    //Caso o ID exista, um "objeto" é retornado. Caso contrario ele não existe
    if (typeof resultado === "object") {
      if (resultado.length !== 0) {
        console.log("Livro encontrado!");
        console.log(`Matricula: ${resultado[0].getMatricula}`);
        console.log(`Nome: ${resultado[0].getNome}`);
        console.log(`Editora: ${resultado[0].getEditora}`);
        console.log(`Autor: ${resultado[0].getAutor}`);
        console.log(`Genero: ${resultado[0].getGenero}`);
        console.log(`Preco: ${resultado[0].getPreco}`);
      } else {
        console.log("Nenhum livro foi encontrado.");
      }
    } else {
      console.log(
        "Ocorreu um erro ao executar a operação. Tente novamente mais tarde."
      );
    }

    console.log("Aperte qualquer tecla para voltar ao menu...");
    leitor.keyIn();
  }

  async buscarNome() {
    // opção para buscar apenas 1 elemento por Nome
    let nome = leitor.question("Digite o nome do livro a ser buscado: \n");

    let resultado: Array<Livro> | constantes.errosPossiveis = await this.#LivroController.livroBuscarNome(nome);

    //Caso o nome exista, um "objeto" é retornado. Caso contrario ele não existe

    if (typeof resultado === "object") {
      if (resultado.length !== 0) {
        console.log("Livros encontrados:");
        for (let i = 0; i < resultado.length; i++) {
          console.log(`Matricula: ${resultado[i].getMatricula}`);
          console.log(`Nome: ${resultado[i].getNome}`);
          console.log(`Editora: ${resultado[i].getEditora}`);
          console.log(`Autor: ${resultado[i].getAutor}`);
          console.log(`Genero: ${resultado[i].getGenero}`);
          console.log(`Preco: ${resultado[i].getPreco}\n`);
        }
      } else {
        console.log("Nenhum livro encontrado!");
      }
    } else {
      console.log(
        "Ocorreu um erro ao executar a operação. Tente novamente mais tarde."
      );
    }

    console.log("Aperte qualquer tecla para voltar ao menu...");
    leitor.keyIn();
  }

  //Função responsavel por editar os dados de algum livro
  async alterar() {
    let idAlterarLivro = leitor.questionInt(
      "Digite o numero de matricula do livro a ser alterado: \n"
    );
    //verifica se o ID do livro existe, caso nao exista ja mostra a mensagem de inexistente
    let resultado:Array<Livro> | constantes.errosPossiveis = await this.#LivroController.livroBuscarID(idAlterarLivro);

    if (typeof resultado === "object") {
      if (resultado.length !== 0) {
        let nome = leitor.question(
          `Nome: ${resultado[0].getNome}. Novo nome do livro: `
        );
        let editora = leitor.question(
          `Editora: ${resultado[0].getEditora}. Nova editora do livro: `
        );
        let autor = leitor.question(
          `Autor: ${resultado[0].getAutor}. Novo autor do livro: `
        );
        let genero = leitor.question(
          `Genero: ${resultado[0].getGenero}. Novo genero do livro: `
        );
        let preco = leitor.questionFloat(
          `Preço: ${resultado[0].getPreco}. Novo preço do livro: `
        );

        //Após receber os novos dados do usuario, ai sim ocorre a modificação da informação no software
        resultado = await this.#LivroController.livroAlterar(
          resultado[0],
          nome,
          editora,
          autor,
          genero,
          preco
        );

        //De acordo com o resultado obtido pelo alterar, ele irá mostrar uma mensagem diferente
        if (resultado === constantes.resultadosPossiveis.SUCESSO) {
          console.log("Livro editado com sucesso");
        } else if (resultado === constantes.resultadosPossiveis.ERRO_GERAL) {
          console.log("Erro ao alterar o livro. Tente novamente mais tarde.");
        }
      } else {
        console.log("Matricula nao encontrada");
      }
    } else {
      if (resultado === constantes.resultadosPossiveis.ERRO_GERAL) {
        console.log(
          "Erro geral ao tentar editar o livro. Tente novamente mais tarde"
        );
      }
    }

    console.log("Aperte qualquer tecla para voltar ao menu...");
    leitor.keyIn();
  }

  //Função responsavel por apagar um dado do programa
  async apagar() {
    let id_remover_livro:number = leitor.questionInt(
      "Digite o numero de matricula do livro a ser removido: \n"
    );

    //Seguindo a mesma ideia de ALTERAR, primeiro busca o livro e verifica se ele existe
    let resultado:Array<Livro> | constantes.errosPossiveis = await this.#LivroController.livroBuscarID(id_remover_livro);

    if (typeof resultado === "object") {
      if (resultado.length !== 0) {
        //Com o livro encontrado, ele de fato apaga a informação
        resultado = await this.#LivroController.livroApagar(
          resultado[0].getMatricula
        );

        //verifica o resultado obtido da operação de editar e mostra ao usuario
        if (resultado === constantes.resultadosPossiveis.SUCESSO) {
          console.log("Livro apagado com sucesso");
        } else {
          console.log("Erro ao apagar o livro");
        }
      } else {
        console.log("Matricula não encontrada");
      }
    } else {
      console.log("Erro ao apagar o livro");
    }

    console.log("Aperte qualquer tecla para voltar ao menu...");
    leitor.keyIn();
  }
}

export default LivroView;