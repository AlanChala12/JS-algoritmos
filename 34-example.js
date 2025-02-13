// Dados dos números enteros mostrar todos los números terminados en 4 comprendidos entre ellos.
try {
   let n1 = 0;
   let n2 = 30;
   
   if ( n1 > n2 ) {
     while( n2 <= n1 ) {
       n2 += 1
       if ( n2 % 10 == 4 ) {
         console.log(n2)
       }
     }
     
   } else if (  n2 > n1 ) {
     
     while( n1 <= n2 ) {
       n1 += 1;
       if ( n1 % 10 == 4 ) {
         console.log(n1)
       }
     }
   }
   
} 
 
catch(error) {
   console.warn(error)
}