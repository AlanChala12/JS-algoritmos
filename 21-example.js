// Construir una función que reciba como parámetros dos números enteros y retorne 1 si el primer número es múltiplo del segundo y 0 si no.

const esMultiplo = (int1, int2) => {

   if ( int2 <= 0 ) {
     return `Ingresa valores, diferentes de cero`
   } 
   else if ( int1 % int2 == 0 ) {
     return 1
   } 
   else {
     return 0
   }

}
 
console.log( esMultiplo(20, 2) )
 