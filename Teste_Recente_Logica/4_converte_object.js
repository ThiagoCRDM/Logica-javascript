/*
  Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
  Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}
*/

function converterObjeto(mat){
  let obj = {}
  for(let i = 0; i < mat.length ;i++){
    let [key, value] = mat[i]
    obj = {...obj, [key]: value}
  }
  return obj
}

console.log(converterObjeto([["c",2],["d",4]]))