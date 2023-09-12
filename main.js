const leitor = require('readline-sync')


function menu(){
    //console.clear()
    console.log("----- MENU LIVRARIA -----")
    console.log("0 - Sair")
    console.log("1 - Listar todos os livros")
    console.log("2 - Cadastrar livro")
    console.log("3 - Buscar livro")
    console.log("4 - Alterar livro")
    console.log("5 - Apagar livro")
}


do{
    menu()
    opt = leitor.questionInt("Escolha uma opção")
    switch(opt){
        case 0: console.log("Saindo do sistema...")
                break
        case 1: //listarLivros()
                break
        case 2: //cadastrarLivro()
                break
        case 3: //buscarLivro(id)
                break
        case 4: //alterarLivro(id)
                break
        case 5://apagarLivro(id)
                break
        default: console.log("Opção invalida... digite novamente")
    }
    }while(opt != 0)