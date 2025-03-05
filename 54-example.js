// Dados dos números enteros de dos dígitos, determinar a cuánto es igual la suma de todos los dígitos.

const sumFunction = ( int1, int2 ) => {
  
  if ( typeof( int1 ) === "number" && typeof( int2 ) === "number" ) {
    let int1_dig1 = Math.floor( int1 / 10 );
    let int1_dig2 = int1 % 10;
  
    let int2_dig1 = Math.floor( int2 / 10 );
    let int2_dig2 = int2 % 10;

    let sum_dig = int1_dig1 + int1_dig2 + int2_dig1 + int2_dig2;

    return `La suma de los dígitos de los números ${ int1 } y ${ int2 }, es de: ${ sum_dig }`;
  } 
  else {
    return 'Por favor, ingresa valores numéricos que contengan dos dígitos';
  }
  
}

sumFunction( 23, 23 );
