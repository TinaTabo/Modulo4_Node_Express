//-- Importar la clase book
const Book = require('../models/book');

//-- Base de datos hardcoded de libros
let book1 = new Book('Viuda de Hierro','Tapa blanda','Xiran Jay Zhao',18.05,'https://imagessl4.casadellibro.com/a/l/t7/04/9788427224704.jpg',456821,1234);
let book2 = new Book('Ready Player One','Tapa blanda','Ernest Cline',15.00,'https://imagessl9.casadellibro.com/a/l/t7/79/9788466649179.jpg',782546,2345);
let book3 = new Book('Trono de Cristal','Tapa blanda','Sarah J. Maas',14.50,'https://imagessl6.casadellibro.com/a/l/t7/86/9788418359286.jpg',354129,3456);
let book4 = new Book('Harry Potter y la Piedra Filosofal','Tapa dura','J.K.Rowling',14.75,'https://imagessl2.casadellibro.com/a/l/t7/62/9788498382662.jpg',474581,4567);
let book5 = new Book('Cuando los Árboles Cantan','Tapa blanda','Laura Gallego',12.95,'https://imagessl0.casadellibro.com/a/l/t7/30/9788467550030.jpg',528965,5678);

let books = [book1,book2,book3,book4,book5];

//-- Funciones del servidor

//-- Obtiene el libro con la id pasada por parámetro. Si no se le pasa ningún id
//-- devuelve el array completo de libros.
const getBook = (req,res)=>{
    let answer;
    if (books != null) {
        if (req.query.id != undefined) {
            let i = 0;

            while (req.query.id != books[i].id_book && i < books.length) {
                i++;
            }

            if (req.query.id == books[i].id_book) {
                answer = books[i];
            }else{
                answer = {error: false, msg: "No existe ningún libro con la id solicitada", code: 200};
            }
        }else{
            answer = books;
        }
    }else{
        answer = {error: false, msg: "No existe ningún libro", code: 200};
    }
    res.send(answer);
}

//-- Crear un nuevo objeto libro + RETO3: lo añade al array de libros.
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
    let book = new Book(req.body.title,req.body.type,req.body.author,req.body.price,req.body.photo,req.body.id_book,req.body.id_user);
    books.push(book)
    let answer = {error: false, msg: "Libro añadido correctamente", code: 200};
    res.send(answer);
}

//-- Modifica los datos del libro cuyo id coincida con los datos enviados por el body de la solicitud PUT.
const putBook = (req,res)=>{
    let answer;
    let i = 0;
    while (req.body.id_book != books[i].id_book && i < books.length) {
        i++;
    }

    if (req.body.id_book == books[i].id_book) {
        if (req.body.title != undefined) {
            books[i].title = req.body.title;
        }
        if (req.body.type != undefined) {
            books[i].type = req.body.type;
        }
        if (req.body.author != undefined) {
            books[i].author = req.body.author;
        }
        if (req.body.price != undefined) {
            books[i].price = req.body.price;
        }
        if (req.body.photo != undefined) {
            books[i].photo = req.body.photo;
        }
        if (req.body.id_book != undefined) {
            books[i].id_book = req.body.id_book;
        }
        if (req.body.id_user != undefined) {
            books[i].id_user = req.body.id_user;
        }
        answer = {error: false, msg: "Libro modificado correctamente", code: 200};
    }

    res.send(answer);
}

//-- Elimina un libro
const delBook = (req,res)=>{
    let answer = false;
    let i = 0;
    while (req.body.id_book != books[i].id_book && i < books.length) {
        i++;
    }

    if (req.body.id_book == books[i].id_book) {
        books.splice(i,1);
        answer = true;
    }
    res.send(answer);
}

module.exports = {getBook, postBook,putBook, delBook};