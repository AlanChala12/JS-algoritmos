 /* Construir una función que reciba como parámetro un vector de 10 posiciones enteras y retorne la posición en la cual se encuentra el mayor de los datos del vector. */
 
 function indexOfTheBiggestNumber( arr ) {
 
   let bigNumber = Math.max( ...arr );
 return ` ${ arr.indexOf(bigNumber) + 1 } `;

}

console.log( indexOfTheBiggestNumber([1, 22, 3, 4, 5, 6, 7, 8, 9, 0]))