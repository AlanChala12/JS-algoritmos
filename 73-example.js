// Determinar en qué posición de un vector, está el menor número primo.

let numbers = [ 2, 3, 4, 5, 6, 7, 8, 10, 11 ];
let evens = [];

for ( let x of numbers ) {
  let isEven = true;

  for ( let i = 2; i < x; i++ ) {

    if ( x % i === 0 ) {
      isEven = false;
      break;
   }

    isEven && evens.push(x);
    break;
  }
}

console.log( evens )

let minEven = Math.min( ...evens );
console.log(`El número primo menor, del vector [ ${numbers} ], es: ${minEven}`);