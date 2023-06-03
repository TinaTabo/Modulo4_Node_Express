/**
 * Clase para crear un objeto libro
 * @example
 * const libro1 = new Book('Viuda de Hierro','Tapa blanda','Xiran Jay Zhao',18.05,'https://imagessl4.casadellibro.com/a/l/t7/04/9788427224704.jpg',982305,1234)
 */
class Book{
    /**
     * Constructor de la clase
     * @param {String} title - Título del libro
     * @param {String} type - Tipo de tapa: Tapa blanda/dura
     * @param {String} author - Autor del libro
     * @param {Number} price - Precio del libro
     * @param {String} photo - URL de la foto de portada del libro
     * @param {Number} id_book - Número de identificación del libro.
     * @param {Number} id_user - Número de identificación del usuario.
     */
    constructor(title,type,author,price,photo,id_book = 0,id_user = 0){
        this.title = title;
        this.type = type;
        this.author = author;
        this.price = price;
        this.photo = photo;
        this.id_book = id_book;
        this.id_user = id_user;
    }
}

module.exports = Book;