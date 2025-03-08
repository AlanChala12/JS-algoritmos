// Dado un vector de 10 enteros, determinar en qué posición del vector está el mayor número par.

let numbers = [ 2, 54, 6, 27, 577, 1232, 8, 7, 27, 2 ];
let evens = [];

for ( let i of numbers ) {
  if ( i % 2 === 0 ) {
    evens = [ ...evens, i ];
  } 
}

let biggestEvenInt = Math.max( ...evens );
let index = numbers.indexOf( biggestEvenInt ) + 1;

console.log( `El mayor número par, del vector [${numbers}], esta en la posición ${ index }` );