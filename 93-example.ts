// Dado un número determinar a cuánto es igual la suma de sus dígitos.

let num:number = 230;
let sumDig: number = 0;

for ( let i of num.toString() ) {
   sumDig = sumDig + Number(i);
}

console.log(`La suma de los dígito/s, del número ${ num }, es de: ${ sumDig }`);