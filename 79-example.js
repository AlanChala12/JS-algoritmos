
// Construir una función que reciba como parámetro un vector y retorne la posición del mayor número primo almacenado en el vector.

function primoMayor( arr ) {
   let primos = [];
 
   for ( let num of arr ) {
      let esPrimo = true;
      for ( let i = 2; i < num; i++ ) {
         if( num % i === 0 ) {
           esPrimo = false;
           break;
         }
      }
 
      esPrimo && primos.push( num );
   }
   
   return `Primo mayor: ${ Math.max( ...primos ) }`;
}
 
let arr = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
console.log(primoMayor( arr ))