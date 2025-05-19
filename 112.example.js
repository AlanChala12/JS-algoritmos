 // Dados dos números enteros y determinar cuál es múltiplo de cuál

let [ n1, n2 ] = [ 230, 34 ];

if ( n1 % n2 === 0 ) {
  console.log(`${ n2 }, es múltiplo de ${ n1 }`);
}
else if ( n2 % n1 === 0 ) {
  console.log(`${ n1 }, es múltiplo de ${ n2 }`);
}
else {
  console.log('No son múltiplos el uno del otro')
}