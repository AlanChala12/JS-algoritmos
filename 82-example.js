// Construir una función que reciba como parámetros un vector y un valor entero y retorne 1 si dicho valor entero se encuentra en el vector. Deberá retornar 0 si no es así.

const estaPresente = ( arr, int ) => {
  
   if ( arr.includes(int) ) {
     return 1;
   }
   else {
     return 0;
   }
   
} 
 
estaPresente( [ 22, 3, 4, 5, 3, 4 ], 1 );
 