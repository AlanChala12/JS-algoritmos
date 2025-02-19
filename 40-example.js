// Leer un entero y mostrar todos los múltiplos de 5 comprendidos entre 1 y el número leído

let int = 40;

for ( let i = 1; i <= int; i++ ) {

   if ( i % 5 === 0 ) {
      console.log( i );
   }  

}