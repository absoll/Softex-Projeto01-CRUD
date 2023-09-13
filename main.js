const leitor = require("readline-sync");

//Estrutura padrao do objeto Livro, para referencia quando for fazer as operações nele
const estruturaLivroPadrao = {
  matricula: 0,
  nome: "texto",
  editora: "texto",
  autor: "texto",
};

//Função para listar TODOS os livros. Retorna um vetor contendo todos os livros encontrados
function listarLivros() {
  var vetorRetorno = [];
  for (livro of livros) {
    vetorRetorno.push(livro);
  }
  return vetorRetorno;
}

//Função para buscar livros por ID(matricula). Visto ser um dado unico, caso encontre retorna o objeto, caso contrario retorna "undefined"
function buscarLivroId(id) {
  let resultado = undefined;
  for (let i = 0; i < livros.length; i++) {
    if (id == livros[i].getMatricula) resultado = livros[i];
  }

  return resultado;
}

//Função menu - mostra o menu e as opções
function menu() {
  //console.clear()
  console.log("----- MENU LIVRARIA -----");
  console.log("0 - Sair");
  console.log("1 - Listar todos os livros");
  console.log("2 - Cadastrar livro");
  console.log("3 - Buscar livro");
  console.log("4 - Alterar livro");
  console.log("5 - Apagar livro");
}

//Classe livro que sera usada em todo o CRUD
class Livro {
  constructor(nome = "", editora = "", autor = "") {
    if (livros.length == 0) {
      //verifica o tamanho do vetor de livro, se for = 0, inicia a matricula em 1
      this.matricula = 1;
    } else this.matricula = livros[livros.length - 1].getMatricula + 1; //Caso contrario verifica o valor da matricula do ultimo elemento e incrementa em 1

    this.nome = nome;
    this.editora = editora;
    this.autor = autor;
  }

  //lista de GETs
  get getMatricula() {
    return this.matricula;
  }
  get getNome() {
    return this.nome;
  }
  get getEditora() {
    return this.editora;
  }
  get getAutor() {
    return this.autor;
  }

  //lista de SETs
  set setNome(nome) {
    this.nome = nome;
  }
  set setEditora(editora) {
    this.editora = editora;
  }
  set setAutor(autor) {
    this.autor = autor;
  }
}

//populando o vetor inicialmente, para fazer os testes de buscar/alterar/apagar
const livros = [];
let livro = new Livro("nome1", "editora1", "autor1");
livros.push(livro);

livro = new Livro("nome2", "editora2", "autor2");
livros.push(livro);

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
      resultado = listarLivros();
      for (livro of resultado) {
        console.log(`Matricula: ${livro.getMatricula}`);
        console.log(`Nome: ${livro.getNome}`);
        console.log(`Editora: ${livro.getEditora}`);
        console.log(`Autor: ${livro.getAutor}\n`);
      }
      console.log("Aperte qualquer tecla para voltar ao menu...");
      leitor.keyIn(); //Fica aguardando o usuario digitar qualquer tecla para prosseguir
      console.clear();
      break;
    case 2: //cadastrarLivro()
      break;
    case 3: // opção para buscar apenas 1 elemento por ID
      let id = leitor.questionInt(
        "Digite o numero de matricula do livro a ser buscado: \n"
      );

      resultado = buscarLivroId(id);

      if (resultado != undefined) {
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
      console.clear();
      break;
    case 4: //alterarLivro(id)
      break;
    case 5: //apagarLivro(id)
      break;
    default:
      console.log("Opção invalida... digite novamente");
  }
} while (opt != 0);
