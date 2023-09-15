import * as leitor from "readline-sync";
import LivroView from "#diretorioRaiz/view/livroView.js";
//const leitor = require("readline-sync");
//const livroView = require("#diretorioRaiz/view/livroView.js");

//Função menu - mostra o menu e as opções
function menu() {
  //console.clear();
  console.log("----- MENU LIVRARIA -----");
  console.log("1 - Listar todos os livros");
  console.log("2 - Cadastrar livro");
  console.log("3 - Buscar livro");
  console.log("4 - Alterar livro");
  console.log("5 - Apagar livro");
  console.log("0 - Sair");
}

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
      new LivroView().listarTodos();
      break;
    case 2:
      new LivroView().cadastrar();
      break;
    case 3:
      new LivroView().buscarID();
      break;
    case 4:
      new LivroView().alterar();
      break;
    case 5:
      new LivroView().apagar();
      break;
    default:
      console.log("Opção invalida... digite novamente");
  }
} while (opt != 0);
