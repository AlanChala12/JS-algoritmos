// Cargar un vector de 10 posiciones con los 10 primeros elementos de la serie de Fibonacci y mostrarlo en pantalla.

let fibonacci_numbers = [];
let n1 = 0;
let n2 = 1;

while ( fibonacci_numbers.length < 10 ) {
  
  fibonacci_numbers.push( n1 );
  let fib = n1 + n2;
  n1 = n2;
  n2 = fib;
  
}

console.log( fibonacci_numbers );