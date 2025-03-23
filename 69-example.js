// Dado un vector, determinar en qué posiciones están los números positivos.

let vect = [ 1, 2, -3, -7, -345, -34, 2, 34 ];
console.log('Números positivos');

vect.forEach( num => {
  num > 0 ? console.log(`El número ${num}, se encuentra en la posición ${ vect.indexOf(num) + 1 }`) : null;
})