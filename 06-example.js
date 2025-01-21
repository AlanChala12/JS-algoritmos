// Determinar si un número es primo.

let n = 3
let esPrimo = true

for (let i = 2; i < n; i++) {

    if (n % i == 0) {
        esPrimo = false
        break
    }

}

if (esPrimo) {
    console.log(`El número ${n}, es primo!`)
} else {
    console.log(`El número ${n}, no es primo!`)
}