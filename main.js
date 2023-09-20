const leitor = require("readline-sync");
const database = require('./banco/banco.js');



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

async function cadastrarLivro(db) {

  let nome = leitor.question("Nome do livro: ");
  let editora = leitor.question("Nome da editora: ");
  let autor = leitor.question("Nome do autor: ");
  await database.inserirLivro(db,nome,autor,editora);
  leitor.keyInPause();
  console.clear();
}

async function main() {
  let db;
  try {
    db = await database.abrirConexao();
    await database.criarTabelas(db);
  } catch (err) {
    console.error('Erro ao abrir conexão ou criar tabelas:', err);
    return;
  }

  let opt;
  do {
    menu();
    opt = leitor.questionInt("Escolha uma opção\n");
    switch (opt) {
      case 0:
        console.log("Saindo do sistema...");
        break;
      case 1:
        console.log("----- LISTANDO TODOS OS LIVROS ----");
        await database.listarLivros(db);
        console.log("Aperte qualquer tecla para voltar ao menu...");
        leitor.keyIn();
        console.clear();
        break;
      case 2:
        await cadastrarLivro(db);
        break;
      case 3:
        let matricula = leitor.questionInt(
          "Digite o numero de matricula do livro a ser buscado: \n"
        );
        await database.buscarPorMatricula(db, matricula);
        console.log("Aperte qualquer tecla para voltar ao menu...");
        leitor.keyIn();
        console.clear();
        break;
      case 4:
        let idAlterarLivro = leitor.questionInt("Digite o numero de matricula do livro a ser alterado: \n");
        let nome = leitor.question("Nome do livro: ");
        let editora = leitor.question("Nome da editora: ");
        let autor = leitor.question("Nome do autor: ");
        await database.alterarLivro(db, idAlterarLivro, nome, editora, autor);
        console.log("Aperte qualquer tecla para voltar ao menu...");
        leitor.keyIn();
        console.clear();
        break;
      case 5:
        let id_remover_livro = leitor.questionInt("Digite o numero de matricula do livro a ser removido: \n");
        await database.apagarLivro(db, id_remover_livro);
        console.log("Aperte qualquer tecla para voltar ao menu...");
        leitor.keyIn();
        console.clear();
        break;
      default:
        console.log("Opção inválida... digite novamente");
    }
  } while (opt != 0);

  db.close((err) => {
    if (err) {
      console.error('Erro ao fechar a conexão:', err.message);
    } else {
      console.log('Conexão com o banco de dados fechada.');
    }
  });
}

main();