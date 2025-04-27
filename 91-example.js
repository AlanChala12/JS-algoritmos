// Dados dos números enteros, mostrar todos los múltiplos de 5 comprendidos entre el menor y el mayor.

let [ n1, n2 ] = [ 20, 2 ];

if ( n1 > n2 ) {
   for ( let i = n2; i <= n1; i++ ) {
      i % 5 === 0 && console.log(i);
   }
}
else if ( n2 > n1 ) {
   for ( let i = n1; i <= n2; i++ ) {
      i % 5 === 0 && console.log(i);
   }
}
else {
   console.log('Los números son iguales');
}
