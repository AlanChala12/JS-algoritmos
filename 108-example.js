// Dado un número entero de tres dígitos, determinar cuántos dígitos pares tiene.

let num = 222

if ( num >= 100 ) {
  let pares = 0

  for ( let i of num.toString() ) {
    Number(i) % 2 === 0 && pares++
  }
  
  console.log(`Cantidad de números pares: ${ pares }`)
}

else {
  console.log('Ingresa un número que contenga 3 dígitos')
}