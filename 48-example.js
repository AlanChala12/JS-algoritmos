// Leer un número entero de dos dígitos menor que 20 y determinar si es primo.

let int = 3;

if ( int > 0 && int < 20 ) {

  let isPrim = true;
  
  for ( let i = 2; i < int; i++ ) {
    if ( int % i === 0 ) {
      isPrim = false;
      break
    }
  }
  
  isPrim ? console.log(`El número ${int}, es primo`) : console.log(`El número ${int}, NO es primo`);

} 

else {
  console.log('Ingresa un número mayor o igual que cero y menor que veinte');
}
