// Leer un número entero de dos dígitos y determinar si un dígito es múltiplo del otro.

let int = 39;
let desition = int >= 10 && int < 100 ? isMul( int ) : console.log('Ingresa un número con dos dígitos');

function isMul( int ) {
  
  try {
    let dig1 = Math.floor( int / 10 );
    let dig2 = int % 10;
  
    if ( dig1 % dig2 === 0 ) {
      console.log(`El dígito ${ dig2 }, es múltiplo de ${ dig1 }`);
    }

    else if ( dig2 % dig1 === 0 ) {
      console.log(`El dígito ${ dig1 }, es múltiplo de ${ dig2 }`);
    }
    else {
      console.log('Ningún dígito, es dígito del otro');
    }
  }
  catch {
    console.warn('Por favor, ingresa valores númericos');
  }
  
}
