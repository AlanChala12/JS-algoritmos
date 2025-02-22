// Mostrar en pantalla el promedio entero de los n primeros múltiplos de 3 para un número n leído.

let int = 20;
let multiplosDeTres = 0;
let numeros = [];
let sumValores = 0;

for ( let x = 1; x <= int; x++ ) {

  if ( x % 3 === 0 ) {
    multiplosDeTres++;
    numeros.push( x )
  }

}

for ( let i of numeros ) {
  sumValores = i + sumValores;
}

let promedio = Math.floor( sumValores / multiplosDeTres );

console.log( `El promedio entero de los múltiplos de 3 dados en el intervalo de 1-${int} es de: "${promedio}"` );