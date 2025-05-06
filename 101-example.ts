// Determinar a cuánto es igual la suma de los elementos de la serie de Fibonacci entre 0 y 100

let fibNums: number[] = [];
let [ n1, n2 ] = [ 0, 1 ];

for ( let i = 0; i < 100; i++ ) {
   fibNums = [ ...fibNums, n1 ];
   let fib = n1 + n2;
   n1 = n2;
   n2 = fib;
}

let sumElemts: number = 0;
fibNums.forEach( num => sumElemts += num );

console.log(`La suma de los elementos de la serie de fibonacci en el rango [0-100], es de ${ sumElemts }`);