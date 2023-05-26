/**
 * @module RetosTema2
 */

/**
 * Para estos retos es necesario importar el paquete de node fs/promises
 */
const fs = require('fs/promises');

/**
 * Para estos retos es necesario importar el paquete node readline.
 */
const readline = require('readline');
/**
 * El paquete node readline no tiene ninguna opción para devolver promesas. Para
 * ello utilizamos la siguiente función a la que se le pasa como parámetro la pregunta
 * que se le quiere hacer al usuario y se obtendrá una promesa con los datos introducidos
 * por el usuario.
 * @param {string} pregunta - Pregunta para el usuario. En este caso para completar los campos
 * del objeto user necesitamos preguntar: ¿Cómo te llamas?, ¿Cúal es tu primer apellido? y
 * ¿Cuántos años tienes?
 * @returns {Promises}
 */
function pregunta(pregunta){
    const question = new Promise((resolve,reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });
    return question;
}

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
pregunta('¿Cómo te llamas? ')
    .then(respuesta => {
        user.name = respuesta;
        return pregunta('¿Cuál es tu primer apellido? ')
    })
    .then(respuesta => {
        user.surname = respuesta;
        return pregunta('¿Cuántos años tienes?(Número) ')
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
    })
    .catch(error => {
        console.log(error);
    })