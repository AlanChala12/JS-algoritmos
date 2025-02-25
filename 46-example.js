// Dado un número entero de dos dígitos, determinar a cuánto es igual la suma de sus dígitos.

let int = 26;

if( int >= 10 && int < 100 ) {
  
  let dig1 = Math.round(int / 10);
  let dig2 = int % 10;
  
  let sumOfDigit = dig1 + dig2;
  
  console.log(`La suma de los dígitos del número ${int}, es de: ${sumOfDigit}`)
  
} 
else {
  console.log('Por favor, ingresa un número entero de dos dígitos')
}