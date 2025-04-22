// Construir una función que reciba como parámetro un vector y un dígito y que retorne la cantidad de números del vector que terminan en dicho dígito.

function terminaEn( arr: number[], dig: number ): number {

   let veces = 0;
   
   arr.forEach((num: number) => {
      if ( num % 10 === dig ) {
         veces += 1;
      }
   })

   return veces;

}

terminaEn([2, 33, 5, 76, 87, 546, 56], 2);