/* 
O método reduce() executa a função de callback uma vez para cada elemento presente no array, excluindo furos
 (valores indefinidos), recebendo quatro argumentos:

acumulador - valor inicial (ou o valor do callback anterior),
valorAtual - o valor do elemento atual
index - o índice atual e
array - o array onde a iteração está ocorrendo.
A primeira vez que o callback é chamado, o acumulador e o valorAtual podem ter um de dois valores possíveis. 
Se o valorInicial tiver sido fornecido na chamada à função reduce(), então o acumulador será igual ao 
valorInicial e o valorAtual será igual ao primeiro valor no array. Caso nenhum valorInicial seja fornecido,
acumulador será igual ao primeiro valor no array, e valorAtual será igual ao segundo
*/


ArrayQlqr = [0, 1, 2, 3, 4]

const SomaDosValoresdoArray = ArrayQlqr.reduce(function(acumulador, valorAtual, index, array) {
    return acumulador + valorAtual;
  });
  console.log(SomaDosValoresdoArray)




  