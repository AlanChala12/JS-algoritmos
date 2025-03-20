// Dado un vector, determinar cuántos datos son múltiplos de 3.

let multiplosDeTres = 0;
let numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

for ( let i of numeros ) {

  if ( i % 3 === 0 ) {
    multiplosDeTres += 1;
  }
  
}

console.log(`La cantidad de múltiplos de tres del vector [${ numeros }], es de ${ multiplosDeTres }`);