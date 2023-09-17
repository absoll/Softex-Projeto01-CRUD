const leitor = require("readline-sync");
const db = require('./banco/banco.js');

db.criarTabelas();


//Função menu - mostra o menu e as opções
function menu() {
  //console.clear()
  console.log("----- MENU LIVRARIA -----");
  console.log("1 - Listar todos os livros");
  console.log("2 - Cadastrar livro");
  console.log("3 - Buscar livro");
  console.log("4 - Alterar livro");
  console.log("5 - Apagar livro");
  console.log("0 - Sair");
}

function cadastrarLivro() {

  let nome = leitor.question("Nome do livro: ");
  let editora = leitor.question("Nome da editora: ");
  let autor = leitor.question("Nome do autor: ");
  db.inserirLivro(nome,autor,editora);
  leitor.keyInPause;
  console.clear();
}

//Inicio da execução do codigo
let resultado;
let opt;
do {
  menu();
  opt = leitor.questionInt("Escolha uma opção\n");
  switch (opt) {
    case 0:
      console.log("Saindo do sistema...");
      break;
    case 1: //Opção para listar todos os livros
      console.log("----- LISTANDO TODOS OS LIVROS ----");
      db.listarLivros();
      console.log("Aperte qualquer tecla para voltar ao menu...");
      leitor.keyIn(); //Fica aguardando o usuario digitar qualquer tecla para prosseguir
      console.clear();
      break;
    case 2: cadastrarLivro();
      break;
    case 3: // opção para buscar apenas 1 elemento por ID
      let matricula = leitor.questionInt(
        "Digite o numero de matricula do livro a ser buscado: \n"
      );

      db.buscarPorMatricula(id);

      console.log("Aperte qualquer tecla para voltar ao menu...");
      leitor.keyIn();
      console.clear();
      break;
    case 4: //alterarLivro(id)
      let idAlterarLivro = leitor.questionInt("Digite o numero de matricula do livro a ser alterado: \n");
      let nome = leitor.question("Nome do livro: ");
      let editora = leitor.question("Nome da editora: ");
      let autor = leitor.question("Nome do autor: ");

      db.alterarLivro(idAlterarLivro,nome,editora,autor);

      console.log("Aperte qualquer tecla para voltar ao menu...");
      leitor.keyIn();
      console.clear();
      break;
    case 5: //apagarLivro(id)
      let id_remover_livro = leitor.questionInt("Digite o numero de matricula do livro a ser removido: \n");

      db.apagarLivro(id_remover_livro)

      console.log("Aperte qualquer tecla para voltar ao menu...");
      leitor.keyIn();
      console.clear();
      break;
    default:
      console.log("Opção invalida... digite novamente");
  }
} while (opt != 0);
