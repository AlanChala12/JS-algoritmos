// Dado un número entero de dos dígitos, determinar si los dos dígitos son iguales.

let int = 11;

if ( int >= 10 && int < 100 ) {
  
  let int1 = Math.floor( int / 10 );
  let int2 = int % 10;
  
  console.log( int1 === int2 ? `Los dígitos que conforman al número ${ int }, SON iguales`: `Los dígitos que conforman al número ${ int } NO SON iguales` )
  
}
else {
  console.log('Por favor, ingresa un número entero que contenga dos dígitos')
}
