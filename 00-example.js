// Dada una matriz de números enteros, encuentre la suma de sus elementos. 

function simpleArraySum(ar) {
    
    let sum = 0
      for (let x of ar) {
        sum = sum + x;
      }
      return sum
    }
    
console.log(simpleArraySum([1, 2, 3]))