// Construir una función que reciba como parámetro dos enteros y retorne 1 si la diferencia entre los dos valores es un número primo. Deberá retornar 0 si no es así.

function diferenciaPrima( int1, int2 ) {

   let diferencia = Math.abs( int1 - int2 );
   let esPrimo = true;
   
   for ( let i = 2; i < diferencia; i++ ) {
     if ( diferencia % i == 0 ) {
       esPrimo = false;
       break;
     }  
   }
   
   return esPrimo ? 1 : 0;
   
};
 
diferenciaPrima( 7, 3 );