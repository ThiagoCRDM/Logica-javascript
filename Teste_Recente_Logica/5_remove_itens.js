/*
  Implemente um método que retorne um array, sem os itens passados por parâmetro depois do 
  array de entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]
*/

function removeItens(array, ...value){
  for(let i = array.length; i >= 0; i--){
    for(let j = 0; j < value.length; j++){
      if(array[i] == value[j]){
        array.splice(i,1)
      }
    }
  }
  return array
}


console.log(removeItens([5,4,3,2,5], 5,3))