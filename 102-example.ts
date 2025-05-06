// Leer un número y calcularle el factorial a todos los enteros comprendidos entre 1 y el número leído

function eachFact(num: number): void {

   for ( let i = 1; i <= num; i++ ) {
      let fact: number = 1;

      for ( let x = 1; x <= i; x++ ) {
          fact = fact * x;
      }

      console.log(`${ i }! = ${ fact }`);
   }

}

console.log(eachFact(5));