// Determinar a cuanto es igual el promedio entero de los dígitos de un número 

let num: number = 233;
let sumDig: number = 0;

for ( let i of num.toString() ) {
   sumDig += Number(i);
}

let promedio: number = Math.floor(sumDig / num.toString().length);
console.log(`Promedio: ${ promedio }`);