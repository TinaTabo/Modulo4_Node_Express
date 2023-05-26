/**
 * @module RetosTema2
 */

/**
 * Para estos retos es necesario importar el paquete de node fs/promises
 */
const fs = require('fs/promises');

/**
 * Para estos retos es necesario importar el paquete node readline/promises.
 */
const readline = require('readline/promises');
/**
 * Para utilizar este paquete para obtener los datos del usuario por linea de comandos
 * es necesario utilizar el método createInterface.
 */
const rlp = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
})

/**
 * Definición del objeto literal user
 * @typedef {Object} user
 * @property {string} name - Nombre del usuario
 * @property {string} surname - Apellido del usuario
 * @property {number} age - Edad del usuario
 */
let user = {
    name: "",
    surname: "",
    age: 0
}

/**
 * @typedef {Promise}
 * Tratamiento_de_las_promesas. A partir de las promesas se obtienen los datos del usuario,
 * se guardan en la variable user, y esta se escribe en un archivo json. Si este archivo se
 * crea correctamente, a continuacion se lee, y se muestra por consola los datos obtenidos del
 * fichero al usuario.
 */
rlp.question('¿Cómo te llamas? ')
    .then(respuesta => {
        user.name = respuesta;
        return rlp.question('¿Cuál es tu primer apellido? ')
    })
    .then(respuesta => {
        user.surname = respuesta;
        return rlp.question('¿Cuántos años tienes?(Número) ')
    })
    .then(respuesta => {
        user.age =  Number(respuesta);

        fs.writeFile('user.json', JSON.stringify(user));
        console.log('-------------------------------');
        console.log('Archivo creado correctamente');
        console.log('-------------------------------');

        return fs.readFile('./user.json', 'utf-8');
    })
    .then(datosLectura => {
        console.log('-------------------------------');
        console.log(datosLectura.toString());
        console.log('Lectura correcta de fichero');
        console.log('-------------------------------');
        rlp.close();
    })
    .catch(error => {
        console.log(error);
    })