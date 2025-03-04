// Leer dos números enteros de dos dígitos y determinar si la suma de los  dos números origina un número par.

let int1 = 20;
let int2 = 40;

let sum = Math.abs( int1 + int2 );

if ( sum % 2 === 0 ) {
  console.log( `La suma de ${ int1 } y ${ int2 } genera un número par` );
} 
else {
  console.log( `La suma de ${ int1 } y ${ int2 } NO genera un número par` );
}