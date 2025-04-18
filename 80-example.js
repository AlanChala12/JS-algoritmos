// Construir una función que reciba como parámetro un vector y retorne el promedio entero del vector.

const promedioEntero = (arr) => {
  
   let sumArr = 0;
   arr.forEach(num => { sumArr = sumArr + num });
   let promedio = Math.floor( sumArr / arr.length );
   return `Promedio del vector [${ arr }], es: ${ promedio }`;
   
}
 
promedioEntero( [3, 4, 5, 6, 3 ] );