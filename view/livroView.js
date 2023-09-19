import * as leitor from "readline-sync";
import LivroController from "#diretorioRaiz/controller/livroController.js";
import * as constantes from "#diretorioRaiz/constantes.js";

class LivroView {
  //Construtor da classe. Ele irá inicializar uma unica instancia da classe Controller, que irá manipular os dados
  constructor() {
    this.LivroController = new LivroController();
  }

  //função responsavel por listar todos os livros cadastrados
  listarTodos() {
    let resultado = this.LivroController.livroListar();
    if (resultado.length > 0) {
      console.log("----- LISTANDO TODOS OS LIVROS ----");
      //FOR para mostrar os dados que vinheram do controller
      for (const livro of resultado) {
        console.log(`Matricula: ${livro.getMatricula}`);
        console.log(`Nome: ${livro.getNome}`);
        console.log(`Editora: ${livro.getEditora}`);
        console.log(`Autor: ${livro.getAutor}\n`);
      }
    } else {
      console.log("Nenhum livro cadastrado");
    }
    console.log("Aperte qualquer tecla para voltar ao menu...");
    leitor.keyIn(); //Fica aguardando o usuario digitar qualquer tecla para prosseguir
  }

  //Função responsavel por cadastrar um unico livro. Matricula não é passada, ela é gerada automatica
  cadastrar() {
    console.log("----- CADASTRO DE LIVRO -----");
    let nome = leitor.question("Nome do livro: ");
    let editora = leitor.question("Nome da editora: ");
    let autor = leitor.question("Nome do autor: ");

    //passa os dados para o controlador
    let resultado = this.LivroController.livroCadastrar(nome, editora, autor);

    //verifica o resultado vindo do controller
    if (resultado === constantes.resultadosPosiveis.SUCESSO)
      console.log("Livro cadastrado com sucesso!");
    else {
      console.log("Erro ao cadastrar o livro");
    }
    console.log("Aperte qualquer tecla para voltar ao menu...");
    leitor.keyIn();
  }

  //Função buscar por ID (matricula)
  buscarID() {
    // opção para buscar apenas 1 elemento por ID
    let id = leitor.questionInt(
      "Digite o numero de matricula do livro a ser buscado: \n"
    );

    let resultado = this.LivroController.livroBuscarID(id);

    //Caso o ID exista, um "objeto" é retornado. Caso contrario ele não existe
    if (typeof resultado === "object") {
      console.log("Livro encontrado!");
      console.log(`Matricula: ${resultado.getMatricula}`);
      console.log(`Nome: ${resultado.getNome}`);
      console.log(`Editora: ${resultado.getEditora}`);
      console.log(`Autor: ${resultado.getAutor}`);
    } else {
      console.log("Numero de matricula não encontrado");
    }

    console.log("Aperte qualquer tecla para voltar ao menu...");
    leitor.keyIn();
  }

  //Função responsavel por editar os dados de algum livro
  alterar() {
    let idAlterarLivro = leitor.questionInt(
      "Digite o numero de matricula do livro a ser alterado: \n"
    );
    //verifica se o ID do livro existe, caso nao exista ja mostra a mensagem de inexistente
    let resultado = this.LivroController.livroBuscarID(idAlterarLivro);
    if (resultado === constantes.resultadosPosiveis.ERRO_GERAL)
      console.log("Livro não encontrado");
    else {
      let nome = leitor.question(
        `Nome: ${resultado.getNome}. Novo nome do livro: `
      );
      let editora = leitor.question(
        `Editora: ${resultado.getEditora}. Nova editora do livro: `
      );
      let autor = leitor.question(
        `Autor: ${resultado.getAutor}. Novo autor do livro: `
      );

      //Após receber os novos dados do usuario, ai sim ocorre a modificação da informação no software
      resultado = this.LivroController.livroAlterar(
        resultado,
        nome,
        editora,
        autor
      );

      //De acordo com o resultado obtido pelo alterar, ele irá mostrar uma mensagem diferente
      if (resultado === constantes.resultadosPosiveis.SUCESSO) {
        console.log("Livro editado com sucesso");
      } else if (resultado === constantes.resultadosPosiveis.ERRO_GERAL) {
        console.log("Erro ao alterar o livro. Tente novamente mais tarde.");
      }
    }
    console.log("Aperte qualquer tecla para voltar ao menu...");
    leitor.keyIn();
  }

  //Função responsavel por apagar um dado do programa
  apagar() {
    let id_remover_livro = leitor.questionInt(
      "Digite o numero de matricula do livro a ser removido: \n"
    );

    //Seguindo a mesma ideia de ALTERAR, primeiro busca o livro e verifica se ele existe
    let resultado = this.LivroController.livroBuscarID(id_remover_livro);
    if (resultado === constantes.resultadosPosiveis.ERRO_GERAL)
      console.log("Livro não encontrado");
    else {
      //Com o livro encontrado, ele de fato apaga a informação
      resultado = this.LivroController.livroApagar(resultado.getMatricula);

      //verifica o resultado obtido da operação de editar e mostra ao usuario
      if (resultado === constantes.resultadosPosiveis.SUCESSO) {
        console.log("Livro apagado com sucesso");
      } else {
        console.log("Livro nao encontrado");
      }
    }
    console.log("Aperte qualquer tecla para voltar ao menu...");
    leitor.keyIn();
  }
}

export default LivroView;
