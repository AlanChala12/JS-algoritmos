// Construir una función que reciba como parámetro un vector y retorne el promedio real del vector.

const promedio = ( arr ) => {
  
   let sumArr = 0;
   arr.forEach( num => { sumArr = sumArr + num });
   let promedio = sumArr / arr.length;
   
   return `Promedio: ${ promedio }`
   
}
 
promedio( [ 2, 3, 4, 5, 6, 1 ] )