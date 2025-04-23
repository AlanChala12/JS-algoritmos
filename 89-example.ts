// Construir una función que reciba como parámetros un vector y un dígito y que retorne la cantidad de veces que dicho dígito se encuentra en el vector. No se olvide que un mismo dígito puede estar varias veces en un solo número.

function aparitions( arr: number[], dig: number ): number | string {

   let totalAparitions: number = 0; 

   arr.forEach( num => {
       
      let numToString: string = String( num );
      for ( let i of numToString ) {
         if ( i === String(dig) ) {
            totalAparitions += 1;
         }
      }

   })

   return `El dígito ${ dig }, se encuentra ${ totalAparitions }, vez/veces, es el vector [${ arr }]`;
}

console.log( aparitions([22, 3, 1, 2], 2) );