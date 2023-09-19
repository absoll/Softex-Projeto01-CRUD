import * as leitor from "readline-sync";
import LivroView from "#diretorioRaiz/view/livroView.js";
//const leitor = require("readline-sync");
//const livroView = require("#diretorioRaiz/view/livroView.js");

//Função menu - mostra o menu e as opções
function menu() {
  console.clear();
  console.log("----- MENU LIVRARIA -----");
  console.log("1 - Listar todos os livros");
  console.log("2 - Cadastrar livro");
  console.log("3 - Buscar livro");
  console.log("4 - Alterar livro");
  console.log("5 - Apagar livro");
  console.log("0 - Sair");
}

//criação de 1 objeto unico que irá manipular o View
const view = new LivroView();

//Inicio da execução do codigo
let opt;
do {
  menu();
  opt = leitor.questionInt("Escolha uma opção\n");
  switch (opt) {
    case 0:
      console.log("Saindo do sistema...");
      break;
    case 1:
      view.listarTodos();
      break;
    case 2:
      view.cadastrar();
      break;
    case 3:
      view.buscarID();
      break;
    case 4:
      view.alterar();
      break;
    case 5:
      view.apagar();
      break;
    default:
      console.log("Opção invalida... digite novamente");
  }
} while (opt != 0);
