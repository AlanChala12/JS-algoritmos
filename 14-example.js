// Construir una función que reciba como parámetro un entero y retorne la cantidad de dígitos pares.

function cantidadPares( entero ) {
    let ultimoDigito = 0
    let pares = 0
  
    while(entero != 0) {
  
      ultimoDigito = entero % 10
  
      if (ultimoDigito % 2 == 0) {
        pares++
      }
    
    entero = Math.floor(entero / 10) 
  }
    return `La cantidad de dígitos pares, del número proporcionado, es de: ${pares}`
}
  
console.log(cantidadPares(244))