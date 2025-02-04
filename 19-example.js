// Construir una función que reciba como parámetro un entero y un dígito y retorne la cantidad de veces que se encuentra dicho dígito en dicho entero.

const digIn = ( entero, dig ) => {
  
   let digito = dig.toString();
   let int = entero.toString();
   let vecesIn = 0;
   
   for ( let i of int ) {
   
   if (i == dig) {
     vecesIn ++
   }
   
}
     
   return `El dígito ${dig}, se encuentra ${vecesIn} vez/veces, en el entero ${entero}`
   
}
 
console.log(digIn( 24556, 5 ))