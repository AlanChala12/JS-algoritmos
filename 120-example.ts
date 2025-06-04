// Dado cinco enteros positivos, encuentra los valores mínimo y máximo que se pueden calcular sumando exactamente cuatro de los cinco enteros. Luego imprime los valores mínimo y máximo respectivos en una sola línea de dos enteros largos separados por un espacio

function miniMaxSum(arr: number[]): void {

   let arrs: any[] = []
   let sumArrs: number[] = []

   for ( let i in arr ) {
      let index: number = Number(i)

      if ( index >= 2 ) {
         let n1: number[] = arr.slice( index, index + 4 )
         let n2: number[] = arr.slice( 0, index - 1 )
         let sumN: number[] = [ ...n1, ...n2 ]
         arrs.push( sumN )
      }
      else {
         let newArr: number[] = arr.slice( index, index + 4 )
         arrs = [ ...arrs, newArr ]
      }
    }

   for ( let x of arrs ) {
      let sum: number = 0;
      for ( let i of x ) {
         sum = sum + i
      }  
      sumArrs.push( sum )
    }

   let [ minValue, maxValue ] = [ Math.min(...sumArrs), Math.max(...sumArrs) ]
   console.log(minValue, maxValue)

}

miniMaxSum([ 1, 3, 5, 7, 9 ])