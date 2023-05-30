//-- Importar la clases
const Movie = require('../models/movie');
const Professional = require('../models/professional');

//-- Base de datos hardcoded con una pelicula y sus profesionales correspondientes.
let tomHolland = new Professional('Tom Holland',25,70,173,false,'Británico',0,'Actor','https://estoEsUnaURLdePega.com');
let zendaya = new Professional('Zendaya',25,59,178,false,'Estadounidense',0,'Actriz','https://estoEsUnaURLdePega.com');
let jonWatts = new Professional('Jon Watts',42,75,179,false,'Estadounidense',0,'Director','https://estoEsUnaURLdePega.com');
let crisMcKenna = new Professional('Chris McKenna',52,80,180,false,'Estadounidense',0,'Guionista','https://estoEsUnaURLdePega.com');

let pelicula = new Movie('Spider-Man: No Way Home',2021,'Estados Unidos','Acción, aventura, ciencia ficción y superhéroes','https://pics.filmaffinity.com/Spider_Man_No_Way_Home-819449455-large.jpg');
pelicula.actors = [tomHolland,zendaya];
pelicula.director = jonWatts;
pelicula.writer = crisMcKenna;
pelicula.language = 'Inglés';
pelicula.isMCU = true;
pelicula.mainCharacterName = 'Peter Parker';
pelicula.producer = 'Kevin Feige';
pelicula.distributor = 'Sony Pictures Releasing';

// let pelicula = null;

//-- Funciones del servidor

//-- Obtiene la pelicula
const getMovie = (req,res)=>{
    let answer;
    if (pelicula != null) {
            answer = pelicula;
    }else{
        answer = 'No existe ninguna película';
    }
    res.send(answer);
}

//-- Crea una nueva pelicula
/*
Body utilizado en las pruebas
{
    "title": "Los juegos del hambre",
    "realiseYear": 2015,
    "nacionality": "Estadounidense",
    "genre": "acción",
    "photo": "https://estoEsUnaURLdePega.com",
    "actors": [
        {
            "name": "Jennifer Lawrence",
            "age": 33,
            "weight": 58,
            "height": 175,
            "isRetired": false,
            "nationality": "Estadounidense",
            "oscarsNumber": 1,
            "profession": "Actriz",
            "photo": "https://estoEsUnaURLdePega.com"
        },
        {
            "name": "Josh Hutcherson",
            "age": 31,
            "weight": 78,
            "height": 170,
            "isRetired": false,
            "nationality": "Estadounidense",
            "oscarsNumber": 0,
            "profession": "Actor",
            "photo": "https://estoEsUnaURLdePega.com"
        },
        {
            "name": "Liam Hemsworth",
            "age": 33,
            "weight": 85,
            "height": 191,
            "isRetired": false,
            "nationality": "Australiano",
            "oscarsNumber": 0,
            "profession": "Actor",
            "photo": "https://estoEsUnaURLdePega.com"
        }
    ],
    "director": {
            "name": "Gary Ross",
            "age": 67,
            "weight": 70,
            "height": 173,
            "isRetired": false,
            "nationality": "Estadounidense",
            "oscarsNumber": 0,
            "profession": "Director",
            "photo": "https://estoEsUnaURLdePega.com"
        },
    "writer": {
            "name": "Billy Ray",
            "age": 62,
            "weight": 71,
            "height": 169,
            "isRetired": false,
            "nationality": "Estadounidense",
            "oscarsNumber": 0,
            "profession": "Guionista",
            "photo": "https://estoEsUnaURLdePega.com"
        },
    "languaje": "Ingles",
    "isMCU": false,
    "mainCharacterName": "Katniss",
    "producer": "Jon Kilik",
    "distributor": "Lionsgate"
}
*/
const postMovie = (req,res)=>{
    pelicula = new Movie(req.body.title,req.body.realiseYear,req.body.nacionality,req.body.genre,req.body.photo);
    pelicula.actors = req.body.actors;
    pelicula.director = req.body.director;
    pelicula.writer = req.body.writer;
    pelicula.language = req.body.language;
    pelicula.isMCU = req.body.isMCU;
    pelicula.mainCharacterName = req.body.mainCharacterName;
    pelicula.producer = req.body.producer;
    pelicula.distributor = req.body.distributor;
    res.send(pelicula);
}

//-- Modifica los datos de la pelicula
const putMovie = (req,res)=>{
    if (req.body.title != undefined) {
        pelicula.title = req.body.title;
    }
    if (req.body.realiseYear != undefined) {
        pelicula.realiseYear = req.body.realiseYear;
    }
    if (req.body.nacionality != undefined) {
        pelicula.nacionality = req.body.nacionality;
    }
    if (req.body.genre != undefined) {
        pelicula.genre = req.body.genre;
    }
    if (req.body.photo != undefined) {
        pelicula.photo = req.body.photo;
    }
    if (req.body.actors != undefined) {
        pelicula.actors = req.body.actors;
    }
    if (req.body.director != undefined) {
        pelicula.director = req.body.director;
    }
    if (req.body.writer != undefined) {
        pelicula.writer = req.body.writer;
    }
    if (req.body.languaje != undefined) {
        pelicula.languaje = req.body.languaje;
    }
    if (req.body.isMCU != undefined) {
        pelicula.isMCU = req.body.isMCU;
    }
    if (req.body.mainCharacterName != undefined) {
        pelicula.mainCharacterName = req.body.mainCharacterName;
    }
    if (req.body.producer != undefined) {
        pelicula.producer = req.body.producer;
    }
    if (req.body.distributor != undefined) {
        pelicula.distributor = req.body.distributor;
    }
    let answer = "Libro modificado correctamente"

    res.send(answer);
}

//-- Elimina la pelicula
const delMovie = (req,res)=>{
    pelicula = null;
    let answer = 'Pelicula eliminada correctamente'
    res.send(answer);
}

module.exports = {getMovie, postMovie, putMovie, delMovie};