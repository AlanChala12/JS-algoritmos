// Dado un vector, determinar cuáles son los datos almacenados múltiplos de 3.

let vect = [ 2, 3, 345, 56, 23, 76, 87, 2, 45, 56 ];
let multiplosDeTres = vect.filter( num => num % 3 == 0 );

console.log(`Los múltiplos de tres del vector [${ vect }], son: ${ multiplosDeTres }`);