/*
  Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
  Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]
*/

function removeAninhados(array){
  /*
    Não consegui uma resolução eficiente, então utilizei um metodo da propria linguagem
  */

  return array.flat()
}

console.log(removeAninhados([1, 2, [3], [4, 5]]))