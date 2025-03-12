// Determinar cuántos números de un vector, tienen menos de 3 dígitos.

const LessThanThree = ( vec ) => {
  
   let digs = 0;
   
   for ( let i of vec ) {
     if ( i < 100 ) {
       digs++;
     }
   }
   
   return ` La cantidad de números que tienen menos de 3 dígitos, es de ${ digs } `;
   
}
 
LessThanThree([ 200, 40, 2, 1, 40 ]);