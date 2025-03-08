// Dado un vector de 10 enteros, determinar en qué posición del vector está el número mayor.

const BiggerNumber = ( ints ) => {
  
   let maxNum = Math.max(...ints);
   let indexMaxNum = ints.indexOf( maxNum ) + 1;
   console.log( `El número mas grande, del vector ${ ints }, se encuentra en la posición ${ indexMaxNum }` );
   
}
 
BiggerNumber([ 90, 80, 1, 2, 3, 5, 6, 7, 64, 4 ])