// Determinar si los dos dígitos de un número entero, son pares.

let number = 20;

const bothEven = ( int ) => {
   let dig1 = Math.floor(int % 10);
   let dig2 = Math.floor(int / 10);
      
   if ( 10 <= int < 100 ) {
      return 'Por favor, ingresa un número que contenga dos dígitos'
   }
   else if ( dig1 % 2 == 0 && dig2 % 2 == 0 ) {
      return 'Ambos dígitos son pares';
   } 
   else if ( dig1 % 2 == 0 || dig2 % 2 == 0 ) {
      return 'Solo un dígito es par';
   } 
   else {
      return 'Ningún dígito es par';
   }    
}

console.log( bothEven(10000) )