/*
  Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
  Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]
*/

function limparArray(array){
  let array2 = []
  for(let i = 0; i < array.length; i++){
    if(
      !array[i] == undefined || 
      !array[i] == null ||
      !array[i] == '' || 
      !array[i] == 0 || 
      !array[i] == false
    ) array2.push(array[i])  
  }

  return array2
}

console.log(limparArray([1, null, 8,6, false, undefined, 7, 7, 3, '', 0]))
