const fs = require('fs');
const path = require('path');
const pathJSON = path.join('fileSystem', 'package.json');

let  dataRead =fs.readFileSync(pathJSON, 'utf-8');
const jsonData = JSON.parse(dataRead);

let ver = jsonData.version;
console.log('Versión antes de actualizar', ver);

let newVer = parseInt(ver.split('.')[1]) + 1;
jsonData.version = ver.split('.')[0] + '.' + newVer + '.' + ver.split('.')[2];

console.log('La nueva versión será', jsonData.version);

dataRead = JSON.stringify(jsonData, null, 2);
fs.writeFileSync(pathJSON, dataRead);
console.log("Actualizado archivo:", pathJSON);