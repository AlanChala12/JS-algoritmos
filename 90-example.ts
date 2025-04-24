// Construir una función que reciba como parámetro un vector y un dígito y que retorne la cantidad de números del vector en donde dicho dígito está de penúltimo.

function penultimoNumero( arr:number[], dig:number ): number {
   let esIgual:number = 0;

   arr.forEach( num => {
      let numero: number = Math.floor( num / 10 );
      let penultimoDigito: number = Math.floor( numero % 10 )
      if ( penultimoDigito === dig ) {
         esIgual += 1;
      }
   })

   return esIgual;
}


console.log(penultimoNumero([23, 456, 23454], 5));