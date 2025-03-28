
// Construir una función que reciba como parámetro un vector de 10 posiciones enteras y retorne el mayor de los datos del vector.

function BiggestNumber( int ) {
  let bigNum = Math.max( ...int );
  return bigNum;
}

let bigNum = BiggestNumber([ 2, 3, 43, 56, 2, 78, 3, 56, 67, 34 ]);
console.log( bigNum );
