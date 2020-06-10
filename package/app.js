let upperCase = require('upper-case');
console.log(upperCase.upperCase("Hola mundo!"));

// RETO: Busca en la página de npm una librería que te ayude a calcular el factorial de un número.
// Calcula los factoriales de 3, 8, 78 y 1.479
// https://www.npmjs.com/package/factorial

let factorial = require('factorial');

//usamos la libreria factorial
[3,8,78,1479].forEach( e => console.log(factorial(e)));