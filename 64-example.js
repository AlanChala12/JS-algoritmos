// Dado un vector, determinar a cuánto es igual el promedio entero de los datos del vector.

let vect = [ 1, 2, 3, 4, 5 ];
let sumData = 0;

for ( let i of vect ) {
  sumData = sumData + i;
}

let promedio = Math.floor( sumData / vect.length );
console.log( `El promedio entero del vector [${ vect }], es de: "${ promedio }"` );