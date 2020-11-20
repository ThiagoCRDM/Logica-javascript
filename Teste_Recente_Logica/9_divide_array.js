/*
  Implemente um método divida um array por uma quantidade passada por parâmetro.
  Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]
*/

function divideArray(array, divisor){
  array2 = []
  if (divisor == 0)
    return array

  for(let i = 0; i < array.length; i += divisor){
    array2.push(array.slice(i, i + divisor))
  }

  return array2
}

console.log(divideArray([1, 2, 3, 4, 5], 0)) 
