const fs = require('fs'); // Importamos el Módulo File System de Node

let text; 

fs.readFile('../test.txt', 'utf8', function(err, data){
  if(err) throw err;
  text = data;
  console.log('Acabo de terminar de leer el fichero que contiene: ' + text);
});

console.log('El contenido del fichero de texto es: ' + text);
