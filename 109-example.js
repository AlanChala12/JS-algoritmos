// Dado un número entero de cuatro dígitos, determinar si tiene más dígitos pares o impares

let [ pares, impares ] = [ 0, 0 ]
let num = 23433

if ( num >= 1000 ) {
  
   for ( let i of num.toString() ) {
      if ( Number(i) % 2 === 0 ) {
         pares++
      }
      else {
         impares++
      }
   }
   
   if ( pares > impares ) {
      console.log(`${ num }, tiene más pares que impares`)
   }
   else if ( impares > pares ) {
      console.log(`${ num }, tiene más impares que pares`)
   }
   else {
      console.log(`${ num }, posee la misma cantidad de dígitos pares e impares`)
   }
  
}
else {
  console.log('Ingresa un número que contenga 4 dígitos')
}