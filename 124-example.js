
// Dado un número entero de cuatro dígitos, determinar si el segundo dígito es igual al penúltimo

let num = 2330;

if ( num >= 1000 && num < 10000 ) {
  
  let secondDig = Number( num.toString()[1] )
  let beforeLastDig = Number( num.toString()[2] )
  
  secondDig === beforeLastDig && console.log(`Los dígitos ${ secondDig } y ${ beforeLastDig }, del número ${ num }, son iguales`)
  
}
else {
  console.log('Ingresa un número entero de cuatro dígitos')
}