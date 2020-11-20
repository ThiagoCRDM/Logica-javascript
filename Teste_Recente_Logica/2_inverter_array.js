/*
  Implemente um método que inverta um array, não utilize métodos nativos do array.
  Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]
*/

function invertArray(array){
  let array2 = []
  for(let i = 0, j = array.length - 1; i < array.length && j >= 0; i++, j-- ){ 
    array2[i] = array[j]
  }
  return array2
}

console.log(invertArray([1,2,3,4, 5 ,6 ,7,8]))