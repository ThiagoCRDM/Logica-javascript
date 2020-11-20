/*
  Crie uma função que caucule o fatorial de um número natural e retorne o resultado
*/

function fatorial(num){
  /*
    o fator fatorial de um número natural e n! = n * (n-1).

    uma implementação de forma recurciva onde n == 1 e sua condição de padara.
  */
  return num <= 1 ? 1 : fatorial(num -1) * num;
}

module.exports = fatorial
