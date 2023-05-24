/**
 * Paquete de node fs, para utilizar los métodos para escritura y lectura de ficheros,
 * writeFile y readFile.
 */
const fs = require('fs');

/**
 * @module Objetos_Literales
 */
/**
 * Definicion de tipado de objeto literal
 * @typedef {Object} user - Nombre del tipado
 * @property {string} name - Nombre del usuario de tipo string.
 * @property {string} surname - Apellido del usuario de tipo string.
 * @property {number} age - Edad del usuario de tipo number.
 */

/**
 * @module Variables
 */
/**
 * Variable con los datos del usuario
 * @type {user}
 */
let user = {
    name: 'Cris',
    surname: 'Taboada',
    age: 25
}

//-- Crear un archivo json que contenga al objeto user.
fs.writeFile('./reto2.json', JSON.stringify(user), (error) => {
    if (error){
        console.log(error);
    }else{
        console.log('Archivo creado correctamente');
        //-- Leer datos de un archivo json y mostrarlos por pantalla.
        fs.readFile('./reto2.json',(error,data) => {
            if (error){
                console.log(error);
            }else{
                console.log(data.toString());
                console.log('Lectura correcta de fichero');
            }
        })
    }
})