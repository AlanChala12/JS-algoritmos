// Dado un vector de número enteros, determinar cuántas veces está repetido el número mayor.

const apparitions = ( vec ) => {
   let biggestNumber = Math.max( ...vec );
   let times = 0;
 
   for ( let i of vec ) {
      i === biggestNumber && times++;
   }
 
   return `El número mas grande "${ biggestNumber }" del vector [ ${ vec } ], se encuentra, ${ times } vez/veces`;
   
}
 
console.log( apparitions([1, 2, 3, 4, 5, 5, 5]) );