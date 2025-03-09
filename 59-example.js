// Dado un vector, determinar en qué posiciones se encuentran los números terminados en 4

let numbers = [ 1, 2, 3, 4, 5, 20, 24, 1004 ];

for ( let i of numbers ) {

  if ( i % 10 === 4 ) {
    console.log( `El número ${ i }, se encuentra en la posición ${ numbers.indexOf( i ) + 1 }` );
  }
  
}