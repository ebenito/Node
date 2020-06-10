// Kata - Investigación
// Dentro de la carpeta param creamos string_name.js
// Tenemos que crear un comando y le vamos a pasar nuestro nombre y
// apellidos. Pero en este caso, tiene que sacar por pantalla.
// Hola, me llamo <Nombre> y mis apellidos son <Apellidos>
//
// Ejemplo:
//    $ node param/string_name.js Gustavo Pascual Falcó
//     Hola, me llamo Gustavo y mis apellidos son Pascual Falcó
//
// Investigar : https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/

let  varArgs = process.argv.slice(2);
console.log(process.argv);
console.log(varArgs);


switch (varArgs.length) {
    case 1:
        console.log('Me llamo ' + varArgs[0]);
        break;
    case 2:
        console.log('Me llamo ' + varArgs[0] + ' y mi primer apellido es ' + varArgs[1]);
        break;
    case 3:
        console.log('Me llamo ' + varArgs[0] + ' y mis apellidos son ' + varArgs[1] + ' ' + varArgs[2]);
        break;
    case 4:
        console.log('Me llamo ' + varArgs[0] + ' ' +  varArgs[1] + ' y mis apellidos son ' + varArgs[2] + ' ' + varArgs[3]);
    break;
    default:
        console.log('Lo siento, no te he entendido; ¿cómo dices qué te llamas?');
}