// Determinar cual es el dígito mayor de un número 

let num: number = 230;
let digs: number[] = [];

for ( let i of num.toString() ) {
   let dig: number = Number(i);
   digs = [ ...digs, dig ];
}

console.log( `Dígito mayor: ${ Math.max(...digs) }` );