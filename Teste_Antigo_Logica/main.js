const fibonacci = require('./fibonacci')
const fatorial = require('./fatorial')
const sort = require('./sort')


const num = 8

const array = [9,3,2,19,3,4,10,34,-99,99]

console.log(`Fibonacci: ${fibonacci(num)}`)
console.log('\n')
console.log(`Fatorial de ${ num }: ${fatorial(num)}`)
console.log('\n')
console.log(`Array ${array} \nArray oredenado: ${sort(array)}`)