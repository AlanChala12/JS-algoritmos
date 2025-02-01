// Construir una función que reciba como parámetro un entero y retorne 1 si dicho entero está entre los 30 primeros elementos de la serie de Fibonacci. Deberá retornar 0 si no es así.

function isInFib( entero ) {
  
    let n1 = 0
    let n2 = 1
    let fibElements = []
  
    for (let i = 0; i < 30; i++) {
      fibElements.push(n1)
  
      let fib = n1 + n2
  
      n1 = n2
      n2 = fib
    }
    
    let isIn = fibElements.includes(entero) ? 1 : 0
    
    return isIn
  }
  
  
  console.log(isInFib(7))