// Construir una función que reciba como parámetro un entero y un dígito y retorne 1 si dicho entero es múltiplo de dicho dígito y 0 si no es así.

function esMultiplo( entero, dig ) {
    let esMul = entero % dig == 0 ? 1: 0;
    return esMul;
}
  
console.log(esMultiplo( 25, 2 ));