//Estrutura padrao do objeto Livro, apenas para referencia para melhor entendimento
/*const estruturaLivroPadrao = {
  matricula: 0,
  nome: "texto",
  editora: "texto",
  autor: "texto",
  genero: "texto",
  preco: float
};
*/

class Livro {
  #matricula;
  #nome;
  #editora;
  #autor;
  #genero;
  #preco;

  //construtor da classe Livro
  constructor(
    matricula = 1,
    nome = "",
    editora = "",
    autor = "",
    genero = "",
    preco = ""
  ) {
    this.#matricula = matricula;
    this.#nome = nome;
    this.#editora = editora;
    this.#autor = autor;
    this.#genero = genero;
    this.#preco = preco;
  }

  //Para encapsulamento das variaveis. Elas privadas nao podem ser acessadas de fora
  //lista de GETs
  get getMatricula() {
    return this.#matricula;
  }
  get getNome() {
    return this.#nome;
  }
  get getEditora() {
    return this.#editora;
  }
  get getAutor() {
    return this.#autor;
  }
  get getGenero() {
    return this.#genero;
  }
  get getPreco() {
    return this.#preco;
  }

  //lista de SETs. Não possui a opção de editar a matricula.
  set setNome(nome) {
    this.#nome = nome;
  }
  set setEditora(editora) {
    this.#editora = editora;
  }
  set setAutor(autor) {
    this.#autor = autor;
  }
  set setGenero(genero) {
    this.#genero = genero;
  }
  set setPreco(preco) {
    this.#preco = preco;
  }

  JSONparaCLASSE(jsonObjeto) {
    this.#matricula = jsonObjeto.matricula;
    this.#nome = jsonObjeto.nome;
    this.#editora = jsonObjeto.editora;
    this.#autor = jsonObjeto.autor;
    this.#genero = jsonObjeto.genero;
    this.#preco = jsonObjeto.preco;
  }
}

export default Livro;
