
// Construir una función que reciba como parámetro un entero y retorne ese elemento de la serie de Fibonacci.

let fibNums = [];
let n1 = 0;
let n2 = 1;

for ( let i = 1; i <= 1000; i++ ) {
   fibNums.push( n1 );
   let fib = n1 + n2;
   n1 = n2;
   n2 = fib;
}

const fibElement = ( int ) => {
  
   if ( int > fibNums.lenght ) {
      return `No se encuentra un número en dicha posición`;
   }
   else {
      return `${ fibNums[ int ] }`;
   }
  
}

console.log(fibElement(65));