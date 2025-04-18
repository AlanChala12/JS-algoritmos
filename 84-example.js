// Construir una función que reciba como parámetro un vector y retorne la posición en la que se encuentre el mayor número primo que termine en 3 almacenado en el vector

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
  
  let terminadosEnTres = []
  for ( let i of primos ) {
    if ( i % 10 === 3 ) {
      terminadosEnTres.push( i );
    }
  }
  
  return primos.indexOf( Math.max( terminadosEnTres ) );
   
}
 
let arr = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
console.log(primoMayor( arr ));