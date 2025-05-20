// Dados tres números enteros, determinar si el último dígito de los tres números es igual

let [ n1, n2, n3 ] = [ 232, 32, 32 ]

if ( n1 % 10 === n2 % 10 && n1 % 10 === n3 % 10 ) {
  console.log(`El último dígito de cada uno de los tres números es igual`)
}
else {
  console.log(`El último dígito de cada uno de los tres números NO ES igual`)
}