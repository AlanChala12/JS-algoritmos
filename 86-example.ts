// Construir una función que reciba como parámetros dos enteros, el primero actuará como base y el segundo como exponente, y retorne el resultado de elevar dicha base a dicho exponente.

const pow = ( base: number, exponente: number ): number => {
   return base ** exponente;
}

console.log(pow( 3, 0 ));