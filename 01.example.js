// Implementa una función para comparar dos arreglos de tres elementos, otorgando un punto al arreglo con el valor mayor en cada posición. Retorna un nuevo arreglo con los puntajes totales de cada uno.

function compareTriplets(a, b) {

    let arr1Points = 0
    let arr2Points = 0
  
    for (let i = 0; i < a.length; i++) {
    
      if (a[i] > b[i]) {
        arr1Points += 1
      } 
      else if (a[i] < b[i]) {
        arr2Points += 1
      }
      else {
        console.log('Tie')
      }
  
    }
  
    return [arr1Points, arr2Points]

}
  
console.log(compareTriplets([2, 3, 4], [1, 4, 5]))