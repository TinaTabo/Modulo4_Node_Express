//-- Importar la clase book
const Book = require('../models/book');

//-- Base de datos hardcoded de libros
let book = new Book('Viuda de Hierro','Tapa blanda','Xiran Jay Zhao',18.05,'https://imagessl4.casadellibro.com/a/l/t7/04/9788427224704.jpg',982305,1234);
//let book = null;

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
//-- RETO 2: para las pruebas se envía en el body de la solicitud POST lo siguiente:
/*
{
    "title": "Cuando los Árboles Cantan",
    "type": "Tapa blanda",
    "author": "Laura Gallego",
    "price": 12.95,
    "photo": "https://imagessl0.casadellibro.com/a/l/t7/30/9788467550030.jpg",
    "id_book": 629108,
    "id_user": 5678
}
*/
const postBook = (req,res)=>{
    if (book == null) {
        book = new Book(req.body.title,req.body.type,req.body.author,req.body.price,req.body.photo,req.body.id_book,req.body.id_user);
    }
    let answer = book;
    res.send(answer);
}

//-- Modifica los datos del libro enviados por el body de la solicitud PUT.
const putBook = (req,res)=>{
    let answer;
    if (book != null) {
        if (req.body.title != undefined) {
            book.title = req.body.title;
        }
        if (req.body.type != undefined) {
            book.type = req.body.type;
        }
        if (req.body.author != undefined) {
            book.author = req.body.author;
        }
        if (req.body.price != undefined) {
            book.price = req.body.price;
        }
        if (req.body.photo != undefined) {
            book.photo = req.body.photo;
        }
        if (req.body.id_book != undefined) {
            book.id_book = req.body.id_book;
        }
        if (req.body.id_user != undefined) {
            book.id_user = req.body.id_user;
        }
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