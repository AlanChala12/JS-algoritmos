// Calcular e imprimir la suma de los elementos de una matriz, teniendo en cuenta que algunos de esos números enteros pueden ser bastante grandes.

function aVeryBigSum( ar ) {
  
    let sum = 0
  
    for (let i of ar) {
      sum = sum + i
    }
    
    return sum
    
}
  
console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))