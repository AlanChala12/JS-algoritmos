// Dado un número entero determinar a cuánto es igual la suma de todos los enteros comprendidos entre 1 y el número dado.

let int = 3;
let numeros = [];
let totalSum = 0;

for ( let i = 1; i <= int; i++ ) {
  numeros.push( i );
}

for ( let x of numeros ) {
  totalSum = totalSum + x;
}

console.log( `La suma total entre 1 y ${ int }, es de: ${ totalSum }` );