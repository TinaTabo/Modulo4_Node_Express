/**
 * Clase para crear un objeto professional
 * @example
 * let profesional1 = new Professional('Steven Spielberg',75,80,173,false,'Estadounidense',4,'director','https://m.media-amazon.com/images/M/MV5BMTY1NjAzNzE1MV5BMl5BanBnXkFtZTYwNTk0ODc0._V1_FMjpg_UX1000_.jpg');
 */
class Professional{
    /**
     * Constructor de la clase
     * @param {String} name - Nombre del profesional
     * @param {Number} age - Edad del profesional
     * @param {Number} weight - Peso del profesional en Kg
     * @param {Number} height - Altura del profesional en cm
     * @param {Boolean} isRetired - Indicar si el profesional esta retirado o no
     * @param {String} nationality - Nacionalidad del profesional
     * @param {Number} oscarsNumber - Número de premios Oscar que ha ganado el profesional
     * @param {String} profession - Profesión del profesional (Actor/Actriz, Director/a, Guionista, Productor)
     * @param {String} photo - URL de la foto de perfil del profesional
     */
    constructor(name,age,weight,height,isRetired,nationality,oscarsNumber,profession,photo){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photo = photo;
    }
}

module.exports = Professional;