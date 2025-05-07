
// Dado un número entero, calcular el promedio entero de los factoriales de los enteros comprendidos entre 1 y el número

let num: number = 10;
let factoriales: number[] = [];
let sumFacts: number = 0;

for ( let i = 1; i <= num; i++ ) {
   let fact = 1;

   for ( let x = 1; x <= i; x++ ) {
      fact = fact * x;
   }

   factoriales.push(fact);
}

for ( let i of factoriales ) {
   sumFacts = sumFacts + i;
}

let promedio: number = Math.floor( sumFacts / factoriales.length );
console.log(`Promedio: ${ promedio }`);