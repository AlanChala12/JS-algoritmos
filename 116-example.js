// Dados dos números enteros, si la diferencia entre los dos es menor o igual a 10, entonces mostrar en pantalla todos los enteros comprendidos entre el menor y el mayor de los números.

let [ n1, n2 ] = [ 100, 90 ]
let diferencia = Math.abs(n1 - n2)

if ( diferencia <= 10 ) {

   let numeros = [ n1, n2 ]
   let [ min, max ] = [ Math.min( ...numeros ), Math.max( ...numeros ) ]

   for ( let i = min; i <= max; i++ ) {
      console.log(i)
   }

}