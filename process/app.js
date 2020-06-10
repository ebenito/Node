"use strict" //A partir de ECMAScript versión 5.Con el modo estricto, no se pueden, por ejemplo, utilizar variables no declaradas.

console.log('**************************************');
//sacar toda la info del proceso
//console.log(process);

console.log('Ejecutando en ' + process.env.OS + " con plataforma " + process.platform + ' y arquitectura ' + process.arch);

console.log('Nombre de tu equipo: ' + process.env.COMPUTERNAME + " con procesador " + process.env.PROCESSOR_IDENTIFIER);

console.log('**************************************');

console.log('Versión de node.js: ' + process.version);

console.log('Memoria usada', process.memoryUsage());

console.log('Process ID (PID): ' + process.pid);

console.log('Tiempo ejecuccion del script: ', process.uptime());

process.exit(0);

console.log("Este código ya no se ejecuta");