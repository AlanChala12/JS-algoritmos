// Dado un número entero de dos dígitos, determinar si ambos dígitos son pares.
let int = 22;

if ( int >= 10 && int < 100 ) {
  
  let dig1 = Math.round( int / 10 );
  let dig2 = int % 10;
  
  dig1 % 2 == 0 && dig2 % 2 == 0 ? 'Ambos dígitos son pares' : 'Solo uno o ningúno de los dígitos es par';
  
} 
else {
  console.log('Por favor, ingresa un número que contenga dos dígitos');
}
