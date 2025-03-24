// Determinar cuántos números negativos hay en un vector.

let vect = [ -3, 5, -56, 54, 76, 34, 23, -54 ];
let numerosNegativos = 0;

for ( let i of vect ) {
  i < 0 ? numerosNegativos++ : null;
}

console.log(`Hay ${ numerosNegativos } número/s negativos en el vector [${ vect }]`);