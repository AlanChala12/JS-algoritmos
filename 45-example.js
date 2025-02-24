// Escriba un programa que imprima una escalera de tamaño n.

function staircase( n ) {
  
   let symbol = '#';
   
   for ( let i = 1; i <= n; i++ ) {
     let spaces = ' '.repeat(n - i);
     let stairCase = spaces + symbol.repeat(i);
     console.log(stairCase);
   }
   
}
 
staircase(4);