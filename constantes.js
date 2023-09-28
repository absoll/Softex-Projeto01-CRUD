"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadaPalavraMaisucula = exports.primeiraLetraMaiuscula = exports.enderecoLocalBancoDados = exports.resultadosPosiveisBD = exports.resultadosPosiveis = void 0;
exports.default = {};
//Lista de possiveis erros durante a aplicação
var resultadosPosiveis;
(function (resultadosPosiveis) {
    resultadosPosiveis[resultadosPosiveis["SUCESSO"] = 1] = "SUCESSO";
    resultadosPosiveis[resultadosPosiveis["ERRO_GERAL"] = 0] = "ERRO_GERAL";
    resultadosPosiveis[resultadosPosiveis["ERRO_REFERENCE_ERROR"] = 2] = "ERRO_REFERENCE_ERROR";
    resultadosPosiveis[resultadosPosiveis["ERRO_RANGE_ERROR"] = 3] = "ERRO_RANGE_ERROR";
})(resultadosPosiveis || (exports.resultadosPosiveis = resultadosPosiveis = {}));
//Lista de possiveis erros resultantes durante execução do BD
var resultadosPosiveisBD;
(function (resultadosPosiveisBD) {
    resultadosPosiveisBD[resultadosPosiveisBD["SUCESSO"] = 1] = "SUCESSO";
    resultadosPosiveisBD[resultadosPosiveisBD["ERRO_GERAL"] = 99] = "ERRO_GERAL";
    resultadosPosiveisBD[resultadosPosiveisBD["ERRO_SQL_ERROR"] = 2] = "ERRO_SQL_ERROR";
    resultadosPosiveisBD[resultadosPosiveisBD["ERRO_ABRIR_BANCO"] = 3] = "ERRO_ABRIR_BANCO";
    resultadosPosiveisBD[resultadosPosiveisBD["ERRO_FECHAR_BANCO"] = 4] = "ERRO_FECHAR_BANCO";
})(resultadosPosiveisBD || (exports.resultadosPosiveisBD = resultadosPosiveisBD = {}));
exports.enderecoLocalBancoDados = "./banco/banco.db";
//função responsavel por deixar APENAS a primeira letra da frase maiuscula
function primeiraLetraMaiuscula(nome) {
    nome = nome.charAt(0).toLocaleUpperCase() + nome.slice(1);
    return nome;
}
exports.primeiraLetraMaiuscula = primeiraLetraMaiuscula;
//função responsavel por deixar a primeira letra de cada palavra maisucula
function cadaPalavraMaisucula(nome) {
    //divide a string em um vetor com as palavras, usando o " "(espaço em branco) como divisor
    var temporario = nome.split(" ");
    //Para cada unidade do vetor, primeira letra maiuscula e soma com as demais letras
    for (var i = 0; i < temporario.length; i++) {
        temporario[i] =
            temporario[i].charAt(0).toLocaleUpperCase() + temporario[i].slice(1);
    }
    //une novamente em uma unica string
    var retorno = temporario.join(" ");
    return retorno;
}
exports.cadaPalavraMaisucula = cadaPalavraMaisucula;
