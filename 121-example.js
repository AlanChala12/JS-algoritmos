// Dado un número entero de 2 dígitos, si termina en 1, mostrar en pantalla su primer dígito; si termina en 2, mostrar en pantalla la suma de sus dígitos y, si termina en 3, mostrar en pantalla el producto de sus dos dígitos

let num = 23;

if ( num >= 10 && num < 100 ) {
   if ( num % 10 === 1 ) {
      console.log(`Primer dígito ${ Math.floor(num / 10) } de ${ num }`)
   }
   
   else if ( num % 10 === 2 ) {
      let [ dig1, dig2 ] = [ Math.floor(num / 10), num % 10 ]
      let sumDigs = dig1 + dig2
      console.log(`Suma de los dígitos: ${ sumDigs }`)
   }
   
   else if ( num % 10 === 3 ) {
      let [ dig1, dig2 ] = [ Math.floor(num / 10), num % 10 ]
      let pDigs = dig1 * dig2
      console.log(`Producto de los dígitos: ${ pDigs }`)
   }
}
else {
  console.log('Ingresa un número que contenga 2 dígitos')
}