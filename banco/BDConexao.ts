import {
  enderecoLocalBancoDados,
  resultadosPosiveisBD,
} from "#diretorioRaiz/constantes";
//from "#diretorioRaiz/constantes.ts";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

//Classe responsavel PAI herdada por todas as classes que irão relizar a comunicação com o banco
//ela especifica o local do arquivo do banco e possui os métodos para Abrir e Fechar conexao com o banco
export default class BancoDados {
  #enderecoBD: string;
  #BD: any;

  constructor(enderecoBancoLocal: string = enderecoLocalBancoDados) {
    this.#enderecoBD = enderecoBancoLocal;
  }

  //Função responsavel por abrir conexão com o banco
  async conexaoAbrir(): Promise<resultadosPosiveisBD> {
    try {
      this.#BD = await open({
        //especificado o endereco que ira guardar as informações do banco
        filename: this.#enderecoBD,
        driver: sqlite3.Database,
      });
      return resultadosPosiveisBD.SUCESSO;
    } catch (error) {
      console.log("Erro criar " + error);
      return resultadosPosiveisBD.ERRO_ABRIR_BANCO;
    }
  }

  //função responsavel por fechar o banco
  async conexaoFechar(): Promise<resultadosPosiveisBD> {
    try {
      await this.#BD.close();
      return resultadosPosiveisBD.SUCESSO;
    } catch (error) {
      console.log("fechar " + error);
      return resultadosPosiveisBD.ERRO_FECHAR_BANCO;
    }
  }
}

console.log("teste");
