// Dados tres números enteros, determinar si el penúltimo dígito de los tres números es igual

let [ n1, n2, n3 ] = [ 239, 231, 239 ]

if ( Math.floor( n1 / 10 ) % 10 === Math.floor( n2 / 10 ) % 10 && Math.floor( n1 / 10 ) % 10 === Math.floor( n3 / 10 ) % 10 ) {
   console.log(`Los penúltimos dígitos de los números ${ n1 }, ${ n2 } y ${ n3 }, SON iguales`)
}
else {
   console.log(`Los penúltimos dígitos de los números ${ n1 }, ${ n2 } y ${ n3 }, NO SON iguales`)
}