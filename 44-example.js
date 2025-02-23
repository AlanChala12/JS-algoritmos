// Dada una matriz cuadrada, calcule la diferencia absoluta entre las sumas de sus diagonales.

function diagonalDifference(arr) {
  
   let firstIndex = 0;
   let secondIndex = 2;
   
   primaryDiagonalSum = 0
   secondaryDiagonalSum = 0
   
   for ( let i of arr ) {
     primaryDiagonalSum += i[firstIndex];
     secondaryDiagonalSum += i[secondIndex];
     firstIndex += 1;
     secondIndex -= 1;
   }
   
   let absoluteDifference = Math.abs( primaryDiagonalSum - secondaryDiagonalSum );
   
   return absoluteDifference;
   
}

const myArray = [ [1, 2, 3], [4, 5, 6], [9, 8, 9] ];
diagonalDifference( myArray );