import {
  enderecoLocalBancoDados,
  resultadosPosiveisBD,
} from "#diretorioRaiz/constantes.js";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

//Classe responsavel PAI herdada por todas as classes que irão relizar a comunicação com o banco
//ela especifica o local do arquivo do banco e possui os métodos para Abrir e Fechar conexao com o banco
export default class BancoDados {
  constructor(enderecoBancoLocal = enderecoLocalBancoDados) {
    this.enderecoBD = enderecoBancoLocal;
  }

  //Função responsavel por abrir conexão com o banco
  async conexaoAbrir() {
    try {
      this.BD = await open({
        //especificado o endereco que ira guardar as informações do banco
        filename: this.enderecoBD,
        driver: sqlite3.Database,
      });
    } catch (error) {
      console.log("Erro criar " + error);
      return resultadosPosiveisBD.ERRO_ABRIR_BANCO;
    }
  }

  //função responsavel por fechar o banco
  async conexaoFechar() {
    try {
      await this.BD.close();
    } catch (error) {
      console.log("fechar " + error);
      return resultadosPosiveisBD.ERRO_FECHAR_BANCO;
    }
  }
}
