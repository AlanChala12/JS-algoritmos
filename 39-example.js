// Mostrar en pantalla los primeros 20 múltiplos de 3

let multiplosDeTres = 0;

for ( let i = 1; i <= 100; i++ ) {

   if ( i % 3 == 0 ) {
      multiplosDeTres += 1;
      console.log( i );

      if ( multiplosDeTres === 20 ) {
         break;
      }
  }
}