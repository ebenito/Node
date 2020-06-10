// Vamos a crear un fichero app.js que requerirá de un
// módulo Triple, contendrá una función que triplica el valor que le
// pasamos por parámetros a app.js
//
// Ejemplo:
//   $ node modulos/app.js 1 // Resultado 3
//   $ node modulos/app.js 2 // Resultado 6
//   $ node modulos/app.js 4 // Resultado 12

var varArgs = process.argv.slice(2);
var num = parseInt(varArgs[0]);
//console.log('El triple de', num, 'es', 3 * num);

var tripleNumber = require('./triple.js');
var result = tripleNumber(num);
console.log(result);