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
  #matricula: number;
  #nome: string;
  #editora: string;
  #autor: string;
  #genero: string;
  #preco: number;

  //construtor da classe Livro
  constructor(
    matricula: number = 1,
    nome: string = "",
    editora: string = "",
    autor: string = "",
    genero: string = "",
    preco: number = 0
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
  get getMatricula(): number {
    return this.#matricula;
  }
  get getNome(): string {
    return this.#nome;
  }
  get getEditora(): string {
    return this.#editora;
  }
  get getAutor(): string {
    return this.#autor;
  }
  get getGenero(): string {
    return this.#genero;
  }
  get getPreco(): number {
    return this.#preco;
  }

  //lista de SETs. Não possui a opção de editar a matricula.
  set setNome(nome: string) {
    this.#nome = nome;
  }
  set setEditora(editora: string) {
    this.#editora = editora;
  }
  set setAutor(autor: string) {
    this.#autor = autor;
  }
  set setGenero(genero: string) {
    this.#genero = genero;
  }
  set setPreco(preco: number) {
    this.#preco = preco;
  }

  JSONparaCLASSE(jsonObjeto: any) {
    this.#matricula = jsonObjeto.matricula;
    this.#nome = jsonObjeto.nome;
    this.#editora = jsonObjeto.editora;
    this.#autor = jsonObjeto.autor;
    this.#genero = jsonObjeto.genero;
    this.#preco = jsonObjeto.preco;
  }
}

export default Livro;
