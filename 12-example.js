// Construir una función que reciba como parámetro un entero y retorne la cantidad de dígitos.

function digits( entero ) {
    let dig = 0
    
    while (entero != 0) {
      entero = Math.floor(entero / 10)
      dig += 1
    }
    
    return `El número proporcionado, tiene ${dig} digito/digitos`
  }
  
  digits(348984375)