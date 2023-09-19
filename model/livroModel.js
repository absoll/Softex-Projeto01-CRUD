//Estrutura padrao do objeto Livro, apenas para referencia para melhor entendimento
/*const estruturaLivroPadrao = {
  matricula: 0,
  nome: "texto",
  editora: "texto",
  autor: "texto",
};
*/

class Livro {
  #matricula;
  #nome;
  #editora;
  #autor;

  //construtor da classe Livro
  constructor(nome = "", editora = "", autor = "", matricula = 1) {
    this.#matricula = matricula;
    this.#nome = nome;
    this.#editora = editora;
    this.#autor = autor;
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
}

export default Livro;
