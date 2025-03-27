// Construir una función que reciba como parámetro dos enteros de dos dígitos cada uno y retorne 1 si son inversos. Deberá retornar 0 si no es así.

const inversos = ( int1, int2 ) => {
  
   if ( int1 > 10 && int1 < 100 && int2 >= 10 && int2 < 100  ) {
     let inverInt1 = '' 
     
     for ( let i of int1.toString() ) {
       inverInt1 = i + inverInt1;
     }
     
     let condition = Number(inverInt1) === int2 ?  1 : 0;
     return condition;
     
   }
   else {
     return `Ingresa números que contenga dos dígitos`;
   }
   
 }
 
 console.log(inversos( 83, 38 ));