// Determinar cuántas veces un número tiene el dígito 1.

let int: number = 231;
let apariciones: number = 0;

for ( let i of int.toString() ) {
   if ( i === '1' ) {
      apariciones++;
   }
}

if ( apariciones === 0 ) {
   console.log(`El número ${ int }, no tíene el dígito 1`);
}
else {
   console.log(`El número ${ int } tíene el dígito 1: (${ apariciones } vez/veces)`);
}