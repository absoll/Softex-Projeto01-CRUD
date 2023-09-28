let leitor = require("readline-sync");
import LivroView from "#diretorioRaiz/view/livroView";
import CriarTabelas from "#diretorioRaiz/banco/BDTabelas";
//const leitor = require("readline-sync");
//const livroView = require("#diretorioRaiz/view/livroView.js");

//Função menu - mostra o menu e as opções
function menu() {
  console.clear();
  console.log("----- MENU LIVRARIA -----");
  console.log("1 - Listar todos os livros");
  console.log("2 - Cadastrar livro");
  console.log("3 - Buscar livro por matricula");
  console.log("4 - Buscar livro por nome");
  console.log("5 - Alterar livro");
  console.log("6 - Apagar livro");
  console.log("0 - Sair");
}

(async () => {
  //criação de 1 objeto unico que irá manipular o View
  await CriarTabelas();
  const view: LivroView = new LivroView();

  //Inicio da execução do codigo
  let opt: number;
  do {
    menu();
    opt = leitor.questionInt("Escolha uma opção\n");
    switch (opt) {
      case 0:
        console.log("Saindo do sistema...");
        break;
      case 1:
        await view.listarTodos();
        break;
      case 2:
        await view.cadastrar();
        break;
      case 3:
        await view.buscarID();
        break;
      case 4:
        await view.buscarNome();
        break;
      case 5:
        await view.alterar();
        break;
      case 6:
        await view.apagar();
        break;
      default:
        console.log("Opção invalida... digite novamente");
        console.log("Aperte qualquer tecla para voltar ao menu...");
        leitor.keyIn(); //Fica aguardando o usuario digitar qualquer tecla para prosseguir
    }
  } while (opt != 0);
})();
