// Construir una función que reciba un entero y le calcule su factorial.

function factorial( entero ) {
    let fac = entero
  
    for(let i = 1; i < entero; i++) {
      fac = i * fac
    }
    
    return `${entero}! = ${fac}`
}
  
console.log(factorial(10))