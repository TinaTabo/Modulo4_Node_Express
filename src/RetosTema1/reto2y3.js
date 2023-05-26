/**
 * @module RetosTema1-Reto2y3
 */

/**
 * Paquete de node fs, para utilizar los métodos para escritura y lectura de ficheros,
 * writeFile y readFile.
 */
const { log } = require('console');
const fs = require('fs');
/**
 * Paquete node readline, para obtener los datos por consola.
 */
const readline = require('readline');
/**
 * Para utilizar el paquete readline es necesario utilizar el metodo createInterface.
 */
const rl = readline.createInterface(process.stdin, process.stdout);

/**
 * Definicion de tipado de objeto literal
 * @typedef {Object} user - Nombre del tipado
 * @property {string} name - Nombre del usuario de tipo string.
 * @property {string} surname - Apellido del usuario de tipo string.
 * @property {number} age - Edad del usuario de tipo number.
 */


/**
 * Variable donde se guardarán los datos del usuario.
 * @type {user}
 */
let user = {
    name: '',
    surname: '',
    age: 0
}


/**
 * Obtener datos por consola para crear el objeto user.
 */
rl.question('¿Cuál es tu nombre? ', (answer) => {
    user.name = answer;
    rl.question('¿y tu apellido? ', (answer) => {
        user.surname = answer;
        rl.question('¿Cuántos años tienes?(número) ', (answer) => {
            user.age = answer;
            /**
             * Crear un archivo json que contenga al objeto user.
             */
            fs.writeFile('./userRegister.json', JSON.stringify(user), (error) => {
                if (error){
                    console.log(error);
                }else{
                    console.log('------------------------------');
                    console.log('Archivo creado correctamente');
                    console.log('------------------------------');
                    /**
                     * Leer datos de un archivo json y mostrarlos por pantalla.
                     */
                    fs.readFile('./userRegister.json',(error,data) => {
                        if (error){
                            console.log(error);
                        }else{
                            console.log(data.toString());
                            console.log('------------------------------');
                            console.log('Lectura correcta de fichero');
                            console.log('------------------------------');
                            rl.close();
                        }
                    })
                }
            });
        });
    });
});