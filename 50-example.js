// Crea un programa que invierta el orden de una cadena de texto sin usar funciones propias del lenguaje que lo hagan de forma automática.

function cadenaInvertida( string ) {
  
   try {
     let newString = '';
 
     for ( let i of string ) {
       newString = i + newString;
     }
 
     return newString;
   } 
   catch {
     console.log('Por favor, ingresa una cadena de texto');
   }
 
}
 
cadenaInvertida( 4 );