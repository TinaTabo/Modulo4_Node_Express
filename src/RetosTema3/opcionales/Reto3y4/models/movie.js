/**
 * Clase para crear un objeto movie (película)
 * @example
 * const pelicula1 = new Movie('Jumanji: Bienvenidos a la Jungla',2017,'Estados Unidos','Acción, aventura y comedia','https://www.pantalla90.es/wp-content/uploads/2017/12/1uQaSgtHyTN3r2fecL0mSs6geQO.jpg');
 * pelicula1.actors = Professional[profesional1,profesional2,...];
 * pelicula1.director = Professional;
 * pelicula1.writer = Professional;
 * pelicula1.language = 'Inglés';
 * pelicula1.isMCU = false;
 * pelicula1.mainCharacterName = 'Spencer Gilpin';
 * pelicula1.producer = Professional;
 * pelicula1.distributor = 'Sony Pictures Releasing';
 */
class Movie {
    /**
     * Constructor de la clase
     * @param {String} title - Título de la película
     * @param {Number} realiseYear - Año de estreno
     * @param {String} nacionality - Nacionalidad de la película
     * @param {String} genre - Género de la película
     * @param {String} photo - URL de la carátula de la película
     */
    constructor(title,realiseYear,nacionality,genre,photo){
        this.title = title;
        this.realiseYear = realiseYear;
        this.actors = [];
        this.nacionality = nacionality;
        this.director = "";
        this.writer = "";
        this.language = "";
        this.plataforma = "";
        this.isMCU = false;
        this.mainCharacterName = "";
        this.producer = "";
        this.distributor = "";
        this.genre = genre;
        this.photo = photo;
    }
}

module.exports = Movie;