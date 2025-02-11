// Mostrar todos los enteros comprendidos entre dos números.

let n1 = -1;
let n2 = 2;

if ( n1 > n2 ) {
  while ( n2 <= n1 ) {
    n2 += 1;
    console.log( n2 );
  }
}
else if ( n2 > n1 ) {
    while ( n1 <= n2 ) {
    n1 += 1;
    console.log( n1 );
  }
}
else {
  console.log('Ambos números son iguales')
}