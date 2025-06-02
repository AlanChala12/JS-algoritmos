//  Dado un número entero de 4 dígitos, determinar si el primer dígito es múltiplo de alguno de los otros dígitos

let num = 2340;

if ( num >= 1000 ) {

   let first_dig = Math.floor( num / 1000 );
   let mtp = [];

   for ( let i of num.toString() ) {
      if ( Number(i) % first_dig === 0 ) {
         mtp = [ ...mtp, i ];
      }
   }

   if ( mtp.length > 0 ) {
      console.log(`El primero dígito ${ first_dig }, del número ${ num }, es múltiplo de ${ mtp }`);
   }
   else {
      console.log(`El primero dígito ${ first_dig }, del número ${ num }, NO ES múltiplo de ningún otro dígito`);
   }

}
else {
   console.log('Ingresa un número que contenga cuatro dígitos');
}