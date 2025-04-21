// Construir una función que reciba como parámetro un vector y retorne la cantidad de números terminados en 3 que contiene el vector.

const TerminadosEnTres = ( arr: number[] ): string => {

   let nums: number = 0;
   arr.forEach((num: number) => {
      if ( num % 10 === 3 ) {
         nums += 1;
      }
   })

   return `La cantidad de números terminados en tres del vector ${ arr }, son: "${nums}"`;

}

console.log(TerminadosEnTres([2, 3, 4, 5, 6, 7, 8]));