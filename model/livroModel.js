//Estrutura padrao do objeto Livro, apenas para referencia para melhor entendimento
/*const estruturaLivroPadrao = {
  matricula: 0,
  nome: "texto",
  editora: "texto",
  autor: "texto",
};
*/

class Livro {
    constructor(nome = "", editora = "", autor = "", matricula = 1) {
      /* if (livros.length == 0) {
        //verifica o tamanho do vetor de livro, se for = 0, inicia a matricula em 1
        this.matricula = 1;
        
      } else this.matricula = livros[livros.length - 1].getMatricula + 1; //Caso contrario verifica o valor da matricula do ultimo elemento e incrementa em 1
  */
      this.matricula = matricula;
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
  
  export default Livro;