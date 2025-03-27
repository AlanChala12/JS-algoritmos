// Determinar cuál es el número menor de un vector.

let vect = [ 2, 3, 4, 54, 56, 23, 76, 87, 34 ];
let minNumber = Math.min( ...vect );

console.log( `El número menor del vector [${ vect }], es: ${ minNumber }` );