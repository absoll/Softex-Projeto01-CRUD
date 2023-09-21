//import criarTabela from "#diretorioRaiz/banco/BDTabelas.js";
import BDLivro from "#diretorioRaiz/banco/BDLivro.js";
import Livro from "#diretorioRaiz/model/livroModel.js";

//criarTabela;

(async () => {
  console.log("teste");

  var tste = new BDLivro();
  // var livro = new Livro(1, "nome3", "editora3", "autor3", "genero3", 400);

  // var a = await tste.adicionar(livro);
  // console.log("a " + a);

  //var listarTodos = await tste.listarTodos();
  //  console.log("listarTodos " + listarTodos);

  /* ESSE CODIGO ABAIXO É DO CONTROLLER - LISTAR TODOS
  let v = [];
  for (let i = 0; i < listarTodos.length; i++) {
    console.log(i);
    console.log(listarTodos[i]);
    let temp = new Livro();
    temp.JSONparaCLASSE(listarTodos[i]);
    console.log("tempp " + temp);
    console.log("teste matricula " + temp.getMatricula);
    v.push(temp);
  }
  console.log(v);
  */
  // var buscarMatricula = await tste.buscarMatricula(10);
  // console.log("buscar 1 " + buscarMatricula);

  // buscar apenas 1 livro por matricula
  /*
  let temp = new Livro();
  console.log("tipo matricula " + typeof buscarMatricula);
  console.log(buscarMatricula);
  temp.JSONparaCLASSE(buscarMatricula[0]);
  console.log("tempp " + temp);
  console.log("teste matricula " + temp.getMatricula);
  */

  /*
  var buscarNome = await tste.buscarMatricula(7);
  console.log("buscar nome " + buscarNome);

  let temp = new Livro();
  console.log("tipo nome " + typeof buscarNome);
  console.log(buscarNome);
  temp.JSONparaCLASSE(buscarNome[0]);
  console.log("tempp " + temp);
  console.log("teste nome " + temp.getMatricula);
  */

  /*codigo para o editar livro
  var livro = new Livro(5, "55", "5", "55555", "555", 5);
  var alterar = await tste.alterar(livro);

  var buscarMatricula = await tste.buscarMatricula(5);
  console.log(buscarMatricula);

  console.log("teste alterar " + alterar);
  console.log(alterar);
  */

  var deleta = await tste.deletar(5);
  console.log(deleta);
})();
