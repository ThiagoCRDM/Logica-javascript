/*
  Implemente um método que crie um novo array baseado nos valores passados.
  Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']
*/

function createArray(tamanho, value){
  let array = [tamanho] 
  for(let i = 0; i < tamanho; i++){
    array[i] = value
  }
  return array
}

console.log(createArray(3,'a'))