// Dados tres números enteros y mostrarlos ascendentemente

let [ n1, n2, n3 ] = [ 20, 30, 40 ]

if ( n1 > n2 && n2 > n3 ) {
   console.log(`${ n3 } => ${ n2 } => ${ n1 }`)
}

else if ( n2 > n1 && n1 > n3 ) {
   console.log(`${ n3 } => ${ n1 } => ${ n2 }`)
}

else if ( n2 > n1 && n1 > n3 ) {
   console.log(`${ n3 } => ${ n1 } => ${ n2 }`)
}

else if ( n3 > n1 && n1 > n2 ) {
   console.log(`${ n2 } => ${ n1 } => ${ n3 }`)
}

else if ( n3 > n2 && n1 > n3 ) {
   console.log(`${ n2 } => ${ n3 } => ${ n1 }`)
}

else if ( n2 > n1 && n1 > n3 ) {
   console.log(`${ n3 } => ${ n1 } => ${ n2 }`)
}

else {
   console.log('Los números son iguales')
}