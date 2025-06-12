// Dado un número entero, si es múltiplo de 4, mostrar en pantalla su mitad; si es múltiplo de 5, mostrar en pantalla su cuadrado y, si es múltiplo de 6, mostrar en pantalla su primer dígito. Asumir que el número no es mayor que 100

let num = 90

if ( num < 100 && num >= 0 ) {
   if ( num % 4 === 0 ) {
      console.log( num / 2 )
   }

   else if ( num % 5 === 0 ) {
      console.log( num ** 2 )
   }

   else if ( num % 6 === 0 ) {
      console.log( Number(num.toString()[0]) )
   }
}