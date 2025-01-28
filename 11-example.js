// Construir una función que reciba como parámetro un entero y retorne su último dígito

function lastDigit( entero ) {
    return `El último dígito del número ${entero}, es: ${entero % 10}`
  }
  
console.log(lastDigit(432))