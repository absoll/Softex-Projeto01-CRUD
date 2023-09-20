const sqlite3 = require('sqlite3').verbose();

function abrirConexao() {
    return new Promise((resolve, reject) => {
      const db = new sqlite3.Database('./banco/livros.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
          console.error(err.message);
          reject(err);
        } else {
          console.log('Connected to the livros database.');
          resolve(db);
        }
      });
    });
  }
  
  // Função para criar tabelas no banco de dados
  function criarTabelas(db) {
    return new Promise((resolve, reject) => {
      db.run('CREATE TABLE IF NOT EXISTS livros(matricula INTEGER PRIMARY KEY, nome TEXT, editora TEXT , autor TEXT)', function(err) {
        if (err) {
          console.error(err.message);
          reject(err);
        } else {
          console.log('Tabela de livros criada com sucesso.');
          resolve();
        }
      });
    });
  }
  
  // Função para inserir um livro no banco de dados
  function inserirLivro(db, nome, editora, autor) {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO livros(nome, editora, autor) VALUES (?, ?, ?)`, [nome, editora, autor], function(err) {
        if (err) {
          console.error(err.message);
          reject(err);
        } else {
          console.log(`Livro ${nome} inserido com sucesso!`);
          resolve();
        }
      });
    });
  }


  function listarLivros(db) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM livros`;
  
      db.all(sql, [], (err, livros) => {
        if (err) {
          console.error(err.message);
          reject(err);
        } else {
          livros.forEach((livro) => {
            console.log(livro.matricula, livro.nome, livro.autor, livro.editora);
          });
          resolve();
        }
      });
    });
  }
  
  // Função para buscar um livro por matrícula no banco de dados
  function buscarPorMatricula(db, matricula) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM livros WHERE matricula  = ?`;
  
      db.get(sql, [matricula], (err, livro) => {
        if (err) {
          console.error(err.message);
          reject(err);
        } else {
          if (livro) {
            console.log(livro.matricula, livro.nome, livro.autor, livro.editora);
          } else {
            console.log('Livro não encontrado.');
          }
          resolve();
        }
      });
    });
  }
  
  // Função para alterar um livro no banco de dados
  function alterarLivro(db, matricula, nome, autor, editora) {
    return new Promise((resolve, reject) => {
      let dadosAtualizados = [nome, autor, editora, matricula];
      let sql = `UPDATE livros
                 SET nome = ?,
                 autor = ?,
                 editora = ?
                 WHERE matricula = ?`;
  
      db.run(sql, dadosAtualizados, function(err) {
        if (err) {
          console.error(err.message);
          reject(err);
        } else {
          console.log(`Livro ${nome} atualizado com sucesso!`);
          resolve();
        }
      });
    });
  }
  
  // Função para apagar um livro do banco de dados
  function apagarLivro(db, matricula) {
    return new Promise((resolve, reject) => {
      let sql = `DELETE FROM livros WHERE matricula = ?`;
  
      db.run(sql, [matricula], function(err) {
        if (err) {
          console.error(err.message);
          reject(err);
        } else {
          console.log(`Livro apagado com sucesso!`);
          resolve();
        }
      });
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