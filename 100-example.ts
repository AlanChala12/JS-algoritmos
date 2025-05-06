
// Determinar si un número se encuentra en la serie de fibonacci 

function isInFibSerie( num: number ) {

    let fibNums: number[] = [];
    let [ n1, n2 ] = [ 0, 1 ];

    for ( let i = 0; i < 100; i++ ) {
        fibNums = [ ...fibNums, n1 ];
        let fib = n1 + n2;
        n1 = n2;
        n2 = fib;
    }

    if ( fibNums.includes(num) ) {
        return `El número ${ num }, se encuentra en la serie de fibonacci`;
    }
    else {
        return `El número ${ num }, NO SE encuentra en la serie de fibonacci`;
    }
    
}

console.log(isInFibSerie(3));