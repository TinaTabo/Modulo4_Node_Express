//-- Importar la clase book
const Book = require('../models/book');

//-- Base de datos hardcoded de libros
//let libro = new Book('Viuda de Hierro','Tapa blanda','Xiran Jay Zhao',18.05,'https://imagessl4.casadellibro.com/a/l/t7/04/9788427224704.jpg',982305,1234);
let book = null;

//-- Funciones del servidor

//-- Obtiene el libro
const getBook = (req,res)=>{
    let answer;
    if (book != null) {
        answer = book;
    }else{
        answer = "No existe ningún libro";
    }
    res.send(answer);
}

//-- Crear un nuevo objeto libro
const postBook = (req,res)=>{
    if (book == null) {
        book = new Book('Ready Player One','Tapa blanda','Ernest Cline',15.00,'https://imagessl9.casadellibro.com/a/l/t7/79/9788466649179.jpg',743219,2345)
    }
    let answer = book;
    res.send(answer);
}

//-- Modifica los datos del libro
const putBook = (req,res)=>{
    let answer;
    if (book != null) {
        book.type = 'Tapa dura';
        book.author += ' Cris esta modificando este libro ;P'
        book.price = 50;
        answer = "Libro modificado correctamente";
    }else{
        answer = "No existe ningún libro"
    }
    res.send(answer);
}

//-- Elimina un libro
const delBook = (req,res)=>{
    let answer;
    if (book != null) {
        book = null;
        answer = "Libro eliminado correctamente";
    }else{
        answer = "No existe ningún libro para eliminar";
    }
    res.send(answer);
}

module.exports = {getBook, postBook,putBook, delBook};