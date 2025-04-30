// Desarrolle un algoritmo que permita determinar a cuanto es igual la suma de dígitos pares de un número 

function evenSum( num: number ): number | string {

    let sum: number = 0;

    for ( let i of num.toString() ) {
        let num = Number(i);
        if ( num % 2 === 0 ) {
            sum += num;
        }

    }

    return `La suma de los dígitos pares del número ${ num }, es de: ${ sum }`;
}

console.log(evenSum(24042));