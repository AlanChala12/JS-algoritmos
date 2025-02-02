// Construir una función que reciba como parámetro un entero y retorne el primer dígito de este entero.

function primerDigito( entero ) {

    let primerDig = Math.abs(entero).toString()[0]
    return parseInt(primerDig)
    
  }
  
  console.log(primerDigito(4678543))