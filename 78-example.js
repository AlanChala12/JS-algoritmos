
// Construir una función que reciba como parámetro un vector y retorne la cantidad de números que pertenecen a los 30 primeros elementos de la serie de Fibonacci.

let fibNum = [];

let n1 = 0;
let n2 = 1;

for ( let i = 0; i < 30; i++ ) {
  
  fibNum = [ ...fibNum, n1 ];
  let fib = n1 + n2;
  n1 = n2;
  n2 = fib;
  
}

function EstaEnFib( arr ) {
  
  let numEnFib = 0;
  
  for ( let i of arr ) {
    if ( fibNum.includes(i) ) {
      numEnFib+= 1;
    }
  }
  
  return `La cantidad de números que pertenecen a los 30 primeros elementos de la seria de fibonacci, del vector [ ${ arr } ], son: ${ numEnFib }`;
  
}

EstaEnFib([2, 3, 4, 5, 6, 7, 8, 9, 10]);