/**
 * @module RetosTema1-RetoOpcional
 */

/**
 * Importar modulo readline para obtener datos por consola
 */
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

/**
 * Función que obtiene los datos del usuario por consola y se los pasa a
 * una callback.
 * @param {resquestCallback} callback - Callback a la funcion writeAndRead para registrar los datos del
 * usuario.
 */
function readConsole(callback){
    let user = {
        name: '',
        surname: '',
        age: 0
    }

    rl.question('¿Cuál es tu nombre? ', (name) => {
        user.name = name;
        rl.question('¿y tu apellido? ', (surname) => {
            user.surname = surname;
            rl.question('¿Cuántos años tienes?(número) ', (age) => {
                user.age = age;
                callback(user);
                rl.close();
            });
        });
    });
}

/**
 * Exportar función readConsole.
 */
module.exports = readConsole ;