/*
  Crie uma função que caucule a sequencia de Fibonacci

*/

function fibonacci(num){
  let fib1 = 0, fib2 = 1, array = [];

  for (let i = 1; i <= num; i++) {
   var fib3 = fib1 + fib2;
   fib1 = fib2;
   fib2 = fib3;
   array.push(fib1);
  }
  return array;
}

module.exports = fibonacci

