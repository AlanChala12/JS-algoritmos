// Dados dos números, determinar cual de los dos tiene más dígitos 

let [ num1, num2 ]: number[] = [ 23, 250 ];

if ( num1.toString().length > num2.toString().length ) {
   console.log(`El número ${ num1 }, tiene más dígitos`);
}
else if ( num2.toString().length > num1.toString().length ) {
   console.log(`El número ${ num2 }, tiene más dígitos`);
}
else {
   console.log(`Los números ${ num1 } y ${ num2 }, tienen la misma cantidad de dígitos`);
}