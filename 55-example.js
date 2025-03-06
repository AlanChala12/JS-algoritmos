// Dado un número entero de tres dígitos, determinar a cuánto es igual la suma de sus dígitos.

let int = 240;
let digSum = 0;

if ( int >= 100 && int < 1000 ) {

  while( int !== 0 ) {

    let lastDig = int % 10;
    digSum = digSum + lastDig;
    int = Math.floor( int / 10 );
  }


  console.log(`La suma de los dígitos del número proporcionado es de: ${ digSum }`);

} 

else {
  console.log(`Por favor, ingresa un número que contenga tres dígitos`);
}