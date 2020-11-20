/*
  Implemente um método que encontre os valores comuns entre dois arrays.
  Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]
*/
function valorComum(array1, array2){
  let array3 = []
  for(let i = 0; i < array1.length; i++){
    for(let j = 0; j < array2.length; j++){
      if(array1[i] === array2[j]){
         array3.push(array1[i])
      }
    }
  }
  return array3
}

console.log(valorComum([6, 8], [8, 9]))