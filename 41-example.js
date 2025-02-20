// Dado un número entero de dos dígitos, mostrar en pantalla todos los enteros comprendidos entre un dígito y otro

let int = 92;
  
if ( int >= 10 && int < 100 ) {
  let dig1 = Math.floor( int / 10 );
  let dig2 = Math.floor( int % 10 );
  
  if ( dig1 > dig2 ) {
    console.log( `Intervalo del ${dig2} hasta ${dig1}` )
    for(let i = dig2; i <= dig1; i++) {
      console.log(i);
    }
  }
  else if ( dig2 > dig1 ) {
    console.log( `Intervalo del ${dig1} hasta ${dig2}` )
    for( let i = dig1; i <= dig2; i++ ) {
      console.log( i );
    }
  }
  else {
    console.log( `Los dígitos pertenecientes al número ${int}, son iguales` );
  }
  
} 
else {
  console.log( `Por favor, ingresa un número de dos dígitos` );
}