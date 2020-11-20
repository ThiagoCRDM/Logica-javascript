/*
  Crie uma função chamada sort que oredene o array abaixo do menor para o maior e
  retorne um novo array ordenado. var array_to_sort = [9,3,2,19,3,4,10,34,-99,99].
  Não utilize a função sort nativa do ordenamento de arrays
*/


function swap(array, left, right){
  var temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}


function pivot(array, left, right){
  var pivot = array[Math.floor((left + right) / 2)],
    i = left, j = right;
  while( i <= j){
    while(array[i] < pivot){
      i++;
    }
    while(array[j] > pivot){
      j--;
    }
    if(i <= j){
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}


function quickSort(array, left, right){
  var i;
  if(array.length > 1){
    i = pivot(array, left, right);
    if(left < i -1){
      quickSort(array, left, i -1);
    }
    if( i < right){
      quickSort(array, i, right);
    }
  }
  return array;
}

/*
  Para ordenamento de arrays existem n algoritimos de ordenação; shell sort, quick sort, insert sort, select sort....
  para conclusão desse exercicio escolhi o algoritimo quick sort sendo o mais rapido, porém não um algoritimo estavel
  onde sua complexidade de pior (quando um vetor tende ao infinito) caso é c(n) = O(n log)

  Esse algoritimo funciona através de um pivor (geralmente um numero no meio do array) onde o array e dividido ao meio 
  e ordenado separadamente cada sub array (2) ao fim forma um novo array ordenado
  (estratégia conhecida como "divisao e conquista", usada também em árvores binarias dentre outros algoritimos)

*/


function sort(array){
 return quickSort(array, 0, array.length -1); 
}

module.exports = sort