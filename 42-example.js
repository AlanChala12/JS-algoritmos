// Mostrar en pantalla el resultado de sumar los primeros 20 múltiplos de 3.

let multiplos = [];
let multiplosSum = 0;

for ( let i = 0; i <= 100; i++ ) {

  if( i % 3 === 0 ) {
    multiplos.push(i);

    if ( multiplos.length === 20 ) {
      break;
    }
  }

}

for ( let i of multiplos ) {
  multiplosSum = i + multiplosSum;
}

console.log( `El resultado de sumar los primeros 20 múltiplos de 3, es de: ${multiplosSum}` );