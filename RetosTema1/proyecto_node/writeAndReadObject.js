/**
 * @module RetosTema1-RetoOpcional
 */

/**
 * Paquete de node fs, para utilizar los métodos para escritura y lectura de ficheros,
 * writeFile y readFile.
 */
const fs = require('fs');


/**
 * Funcion que guarda y lee los datos de un usuario de un archivo .json.
 * @param {string} path - URL del directorio del archivo donde se registra al usuario.
 * @param {user} obj - Datos del usuario a registrar.
 */
function writeAndRead(path, obj){
    fs.writeFile(path, JSON.stringify(obj), (error) => {
        if (error){
            console.log(error);
        }else{
            console.log('Archivo creado correctamente');
            fs.readFile(path,(error,data) => {
                if (error){
                    console.log(error);
                }else{
                    console.log(data.toString());
                    console.log('Lectura correcta de fichero');
                }
            })
        }
    });
}

/**
 * Exportar Función writeAndRead
 */
module.exports = writeAndRead;