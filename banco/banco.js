const sqlite3 = require('sqlite3').verbose();

function abrirConexao() {
    const db = new sqlite3.Database('./banco/livros.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Connected to the livros database.');
        }
    });

    return db;
}

function criarTabelas(){
    const db = abrirConexao();

    db.run('CREATE TABLE IF NOT EXISTS livros(matricula INTEGER PRIMARY KEY, nome TEXT, editora TEXT , autor TEXT)', function(err) {
        if (err) {
            return console.log(err.message);
        }
    });
        

    db.close();
}


function inserirLivro(nome,editora,autor){

    const db = abrirConexao();
  
    db.run(`INSERT INTO livros(nome,editora,autor) VALUES(?,?,?)`, [nome,editora,autor], function(err) {
      if (err) {
        return console.log(err.message);
      }
      // get the last insert id
      console.log(`Livro ${nome} inserido com sucesso!`);
    });
  
    db.close();
  
}

function listarLivros(){
    const db = abrirConexao();

    let sql = `SELECT * FROM livros`;

    db.all(sql, [], (err, livros) => {
        if (err) {
            throw err;
        }
        livros.forEach((livro) => {
            console.log(livro.matricula,livro.nome,livro.autor,livro.editora);
        });
    });

    db.close();
}

function buscarPorMatricula(matricula){
    const db = abrirConexao();
    let sql = `SELECT * FROM livros
                WHERE matricula  = ?`

    db.get(sql, [matricula], (err, livro) => {
        if (err) {
          console.error(err.message);
        }
        console.log(livro.matricula, livro.nome, livro.autor, livro.editora);
      
      });

    db.close();
}

function alterarLivro(matricula,nome,autor,editora){
    const db = abrirConexao();
    let dadosAtualizados = [nome,autor,editora, matricula];
    let sql = `UPDATE livros
                SET nome = ?,
                autor = ?,
                editora = ?
                WHERE matricula = ?`;

    db.run(sql, dadosAtualizados, function(err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Livro ${nome} atualizado com sucesso!`);

    });
}

function apagarLivro(matricula){
    const db = abrirConexao();
    let sql = `DELETE FROM livros WHERE matricula = ?`;

    db.run(sql, [matricula], function(err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Livro apagado com sucesso!`);

    });
}

module.exports = {
    abrirConexao,
    criarTabelas,
    listarLivros,
    buscarPorMatricula,
    inserirLivro,
    alterarLivro,
    apagarLivro
  };

listarLivros();