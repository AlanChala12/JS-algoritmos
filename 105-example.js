// Dado un número entero y mostrar todos sus componentes numéricos, o sea, aquellos para quienes él sea un múltiplo.

let number = 3; 

for ( let i = 1; i <= 1000; i++ ) {
   i % number === 0 && console.log(i);
}