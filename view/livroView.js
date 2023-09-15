import * as leitor from "readline-sync";
import LivroController from "#diretorioRaiz/controller/livroController.js";
import * as constantes from "#diretorioRaiz/constantes.js";

class LivroView {
  constructor() {
    this.LivroController = new LivroController();
  }

  listarTodos() {
    let resultado = this.LivroController.livroListar();
    if (resultado.length > 0) {
      console.log("----- LISTANDO TODOS OS LIVROS ----");
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

  cadastrar() {
    console.log("----- CADASTRO DE LIVRO -----");
    let nome = leitor.question("Nome do livro: ");
    let editora = leitor.question("Nome da editora: ");
    let autor = leitor.question("Nome do autor: ");

    let resultado = this.LivroController.livroCadastrar(nome, editora, autor);

    if (resultado === constantes.resultadosPosiveis.SUCESSO)
      console.log("Livro cadastrado com sucesso!");
    else {
      console.log("Erro ao cadastrar o livro");
    }
    console.log("Aperte qualquer tecla para voltar ao menu...");
    leitor.keyIn();
  }

  buscarID() {
    // opção para buscar apenas 1 elemento por ID
    let id = leitor.questionInt(
      "Digite o numero de matricula do livro a ser buscado: \n"
    );

    let resultado = this.LivroController.livroBuscarID(id);

    console.log(resultado);
    if (typeof resultado === "object") {
      //if(!Object.values(resultadosPosiveis).includes(resultado)){
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

  alterar() {
    let idAlterarLivro = leitor.questionInt(
      "Digite o numero de matricula do livro a ser alterado: \n"
    );
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

      resultado = this.LivroController.livroAlterar(
        resultado,
        nome,
        editora,
        autor
      );

      if (resultado === constantes.resultadosPosiveis.SUCESSO) {
        console.log("Livro editado com sucesso");
      } else if (resultado === constantes.resultadosPosiveis.ERRO_GERAL) {
        console.log("Erro ao alterar o livro. Tente novamente mais tarde.");
      }
    }
    console.log("Aperte qualquer tecla para voltar ao menu...");
    leitor.keyIn();
  }

  apagar() {
    let id_remover_livro = leitor.questionInt(
      "Digite o numero de matricula do livro a ser removido: \n"
    );

    let resultado = this.LivroController.livroBuscarID(id_remover_livro);
    if (resultado === constantes.resultadosPosiveis.ERRO_GERAL)
      console.log("Livro não encontrado");
    else {
      resultado = this.LivroController.livroApagar(resultado.getMatricula);
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