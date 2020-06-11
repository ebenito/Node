const fs = require('fs');
const path = require('path');
const pathJSON = path.join('fileSystem', 'data.json');

const data = JSON.stringify(process, null, 2);

fs.writeFileSync(pathJSON, data);
console.log('JSON creado en: ', pathJSON);

const dataRead =fs.readFileSync(pathJSON, 'utf-8');

console.log(typeof dataRead);
//console.log(dataRead);

const jsonData = JSON.parse(dataRead);
console.log(typeof jsonData);

console.log('Ejecutado con Node.js', jsonData.versions.node);