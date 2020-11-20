/*
  Implemente um método que retorne um array, sem valores duplicados.
  Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]
*/

function removeDuplicados(array){
 let array2 = array.filter((arr, i) => { return array.indexOf(arr) === i})
 return array2
}

console.log(removeDuplicados([1,2,3,3,2,4,5,4,7,3]))