// Leer un número entero y calcular a cuánto es igual la sumatoria de todos los factoriales de los números comprendidos entre 1 y el número leído.

let n = 5;
let numbers = [];

for ( let num = 1; num <= 5; num++ ) {

   let fact = 1;

   for ( let i = 1; i <= num; i++ ) {
      fact = fact * i;
   }

   numbers.push( fact );

}

let sum = 0;

numbers.forEach( num => sum = sum + num );
console.log( `Rango [ 1 - ${n} ]` );
console.log( sum );