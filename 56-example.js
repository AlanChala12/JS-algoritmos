 // Leer un número entero de tres dígitos y determinar en qué posición está el mayor dígito.

function biggestDig( int ) {
   let number = int;
   let enteros = [];
 
if ( number >= 100 && number < 1000 ) {    
   while ( number !== 0 ) {
     
     let lastDig = number % 10;
     enteros = [ ...enteros, lastDig ];
     number = Math.floor( number /= 10 );
     
   }
   
   let maxDig = Math.max( ...enteros );
   let index = int.toString();
   index = index.indexOf( maxDig ) + 1;

   console.log( `El dígito mayor del número ${ int }, se encuentra en la posición ${ index }` );
   
} 
else {
   console.log('Ingresa un número de tres dígitos');
}
 
}

biggestDig( 324 );