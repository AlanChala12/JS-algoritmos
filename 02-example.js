// Dado un conjunto de números enteros, calcule las razones de sus elementos que son positivos , negativos y cero. Imprima el valor decimal de cada fracción en una nueva línea con 6 lugares después del decimal.

function plusMinus(arr) {

    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
  
    for (const num of arr) {
      if (num > 0) {
        positiveCount++;
      } 
      else if (num < 0) {
        negativeCount++;
      } 
      else {
        zeroCount++;
      }
    }
  
    const n = arr.length;
    const positiveRatio = positiveCount / n;
    const negativeRatio = negativeCount / n;
    const zeroRatio = zeroCount / n;
  
    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
  }
  
console.log(plusMinus([2, 2, -6, -5, 0]))