// Generar todas las tablas de multiplicar del 1 al 10.

for ( let num = 1; num <= 10; num++ ) {

   console.log(`Tabla del ${ num }`);

   for ( let x = 1; x <= 10; x++ ) {
      console.log(`${ num } x ${ x } = ${ num * x }`)
   }

}