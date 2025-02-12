// Dado un array de 10 enteros, determinar en qué posición del array está el número mayor.

let ints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 45];
let numMayor = Math.max( ...ints );
let indiceNumeroMayor = ints.indexOf( numMayor ) + 1;

console.log(`El número mayor ""${numMayor}"" del array ${ints}, se encuentra en la posición ${indiceNumeroMayor}`);