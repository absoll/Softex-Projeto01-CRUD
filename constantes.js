//Lista de possiveis erros durante a aplicação
export const resultadosPosiveis = {
  SUCESSO: 1,
  ERRO_GERAL: 0,
  ERRO_REFERENCE_ERROR: 2,
  ERRO_RANGE_ERROR: 3,
};

//Lista de possiveis erros resultantes durante execução do BD
export const resultadosPosiveisBD = {
  SUCESSO: 1,
  ERRO_GERAL: 99,
  ERRO_SQL_ERROR: 2,
  ERRO_ABRIR_BANCO: 3,
  ERRO_FECHAR_BANCO: 4,
};

export const enderecoLocalBancoDados = "./banco/banco.db";

//função responsavel por deixar APENAS a primeira letra da frase maiuscula
export function primeiraLetraMaiuscula(nome) {
  nome = nome.charAt(0).toLocaleUpperCase() + nome.slice(1);
  return nome;
}

//função responsavel por deixar a primeira letra de cada palavra maisucula
export function cadaPalavraMaisucula(nome) {
  //divide a string em um vetor com as palavras, usando o " "(espaço em branco) como divisor
  const temporario = nome.split(" ");

  //Para cada unidade do vetor, primeira letra maiuscula e soma com as demais letras
  for (var i = 0; i < temporario.length; i++) {
    temporario[i] =
      temporario[i].charAt(0).toLocaleUpperCase() + temporario[i].slice(1);
  }
  //une novamente em uma unica string
  const retorno = temporario.join(" ");
  return retorno;
}
