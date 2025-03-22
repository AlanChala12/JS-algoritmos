// Dado un array de objetos, crear un nuevo array el cual contenga todos los usuarios mayores de edad.

const users = [
   { name: 'Diego', age: 30, id: 1 },
   { name: 'Maria', age: 20, id: 2 },
   { name: 'Juan', age: 10, id: 3 },
   { name: 'Marcus', age: 67, id: 4 },
   { name: 'Clara', age: 7, id: 5 },
   { name: 'Sofia', age: 8, id: 6 },
   { name: 'Ana', age: 34, id: 7 },
   { name: 'Juan diego', age: 100, id: 8 },
   { name: 'Kevin', age: 45, id: 9 },
   { name: 'Lucas', age: 34, id: 10 },
 ];
 
 let adults = [ users.filter( user => user.age > 18) ];
 console.log( adults );