// Construir una función que reciba como parámetro un entero y retorne 1 si en dicho valor el primer dígito es igual al último. Deberá retornar 0 si no es así.

function isEqual( int ) {
  
   let firstDig = int.toString()
   firstDig = Number( firstDig[0] )
   
   let lastDig = Math.floor( int % 10 )
   
   return firstDig === lastDig ? 1 : 0
   
}
 
console.log( isEqual(341) )