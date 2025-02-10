// Mostrar todos los divisores exactos del número comprendidos entre 1 y x número en una variable.

let int = 9;

for ( let i = 0; i <= int; i++ ) {
  if ( int % i == 0 ) {
    console.log( i );
  }
}