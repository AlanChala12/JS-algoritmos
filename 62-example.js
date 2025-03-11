/* Dado un vector, determinar en qué posiciones se encuentran los números con más de 3 dígitos. */

let ints = [ 1, 2, 300, 2000 ];
console.log(`Números con mas de tres dígitos, del vector [${ ints }]`)

for ( let i of ints ) {
  if ( i >= 100 ) {
    console.log(`El número ${ i }, se encuentra en la posición ${ ints.indexOf( i ) + 1 }`)
  }
}