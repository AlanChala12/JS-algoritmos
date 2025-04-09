// Construir una función que reciba como parámetro un vector de números enteros y retorne la cantidad de números primos almacenados en el vector.

const primos = ( arr ) => {
   let cantidadDePrimos = 0;
   
   for ( let x of arr ) {
     let isPrimo = true;
     for ( let i = 2; i < x; i++ ) {
       if ( x % i == 0 ) {
         isPrimo = false;
         break;
       }
     }
   
     if ( isPrimo ) {
       cantidadDePrimos += 1;
     }
   } 
   
   return `La cantidad de números primos que se encuentran en el vector es de: "${ cantidadDePrimos }"`;
}
 
console.log( primos([ 2, 3, 4 ]) );