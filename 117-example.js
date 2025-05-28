// Determinar si la diferencia entre dos números enteros, da como resultado un número par 

let [ n1, n2 ] = [ 4, 2 ];
let diferencia = Math.abs( n1 - n2 );

if ( diferencia % 2 === 0 ) {
   console.log(`${ diferencia }, ES par`);
}
else {
   console.log(`${ diferencia }, NO ES par`);
}