
// Determinar si la diferencia entre dos números enteros es un número divisor exacto de alguno de los dos números

let [ n1, n2 ] = [ 230, 340 ];
let diferencia = Math.abs( n1 - n2 );

if ( n1 % diferencia === 0 ) {
   console.log(`La diferencia entre ${ n1 } y ${ n2 }, es divisor de ${ n1 }`);
}
else if ( n2 % diferencia === 0 ) {
   console.log(`La diferencia entre ${ n1 } y ${ n2 }, es divisor de ${ n2 }`);
}
else {
   console.log(`La diferencia entre ${ n1 } y ${ n2 }, NO es divisor de ningúno de los dos números`);
}