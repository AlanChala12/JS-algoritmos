// Construir una función que reciba como parámetro un vector y retorne la posición del número entero que tenga mayor cantidad de dígitos

function mayorCantidadDeDigitos( arr ) {
   return Math.max( ...arr );
}
 
mayorCantidadDeDigitos([ 2, 3, 4, 5, 546, 675, 768, 76, 8686 ]);