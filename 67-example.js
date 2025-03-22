// Dado un vector, determinar cuántas veces se repite el promedio entero de los datos dentro del vector.

let vect = [ 2, 3, 21, 2, 4, 5 ];
let sumaVect = 0;
let apariciones = 0;

vect.forEach( num => {
   sumaVect = sumaVect + num;
})

let promedio = Math.round( sumaVect / vect.length );

for ( let i of vect ) {
   i === promedio && apariciones++;
}

console.log(`El promedio entero ${ promedio }, del vector [ ${vect} ], está ${ apariciones } vez/veces`);