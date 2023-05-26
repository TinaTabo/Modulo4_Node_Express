/**
 * Importar las funciones readConsole y writeAndRead creadas en el proyecto
 */
const writeAndRead = require('./writeAndReadObject');
const readConsole = require('./readConsole');

/**
 * Código que pide al usuario sus datos por consola, registra los datos
 * en un archivo.json, los lee de ese archivo creado y los muestra por consola.
 */
let path = './retoOpcional.json';
readConsole((obj) =>
    writeAndRead(path,obj)
);