// Dado un número entero de dos dígitos, guardar cada dígito en una variable diferente y luego mostrarlas en pantalla.

let num = 11;

if ( num >= 10 && num < 100 ) {
   let [ dig1, dig2 ] = [ Math.round( num / 10 ), num % 10 ]
   console.log( `Dígitos de ${ num }, son: ${ dig1 } y ${ dig2 }` )
}
else {
   console.log('Ingresa un número que contenga dos dígitos')
}