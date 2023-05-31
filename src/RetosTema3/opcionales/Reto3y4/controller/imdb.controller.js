//-- Importar la clases
const Movie = require('../models/movie');
const Professional = require('../models/professional');

//-- Base de datos hardcoded con una pelicula y sus profesionales correspondientes.
let tomHolland = new Professional('Tom Holland',25,70,173,false,'Británico',0,'Actor','https://estoEsUnaURLdePega.com',1);
let zendaya = new Professional('Zendaya',25,59,178,false,'Estadounidense',0,'Actriz','https://estoEsUnaURLdePega.com',2);
let jonWatts = new Professional('Jon Watts',42,75,179,false,'Estadounidense',0,'Director','https://estoEsUnaURLdePega.com',3);
let crisMcKenna = new Professional('Chris McKenna',52,80,180,false,'Estadounidense',0,'Guionista','https://estoEsUnaURLdePega.com',4);

let pelicula = new Movie('Spider-Man: No Way Home',2021,'Estados Unidos','Acción, aventura, ciencia ficción y superhéroes','https://pics.filmaffinity.com/Spider_Man_No_Way_Home-819449455-large.jpg');
pelicula.actors = [tomHolland,zendaya];
// pelicula.actors = null;
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

//-- Obtiene los actores de la pelicula
const getActor = (req,res)=>{
    let answer;
    if (pelicula.actors != null) {
        if (req.query.id != undefined) {
            let i = 0;

            while (req.query.id != pelicula.actors[i].id && i < pelicula.actors.length) {
                i++;
            }

            if (req.query.id == pelicula.actors[i].id) {
                answer = pelicula.actors[i];
            }
        }else{
            answer = pelicula.actors;
        }
    }else{
        answer = "No existe ningún actor/actriz";
    }
    res.send(answer);
}

//-- Obtiene el director de la pelicula
const getDirector = (req,res)=>{
    let answer;
    if (pelicula.director != null) {
            answer = pelicula.director;
    }else{
        answer = 'No existe ningún director';
    }
    res.send(answer);
}

//-- Obtiene el guionista de la pelicula
const getWriter = (req,res)=>{
    let answer;
    if (pelicula.writer != null) {
            answer = pelicula.writer;
    }else{
        answer = 'No existe ningún guionista';
    }
    res.send(answer);
}

//-- Crea una nueva pelicula
/*
Body utilizado en las pruebas
{
    "title": "Los juegos del hambre",
    "realiseYear": 2015,
    "nationality": "Estadounidense",
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
            "photo": "https://estoEsUnaURLdePega.com",
            "id": 5
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
            "photo": "https://estoEsUnaURLdePega.com",
            "id": 6
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
            "photo": "https://estoEsUnaURLdePega.com",
            "id": 7
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
            "photo": "https://estoEsUnaURLdePega.com",
            "id": 8
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
            "photo": "https://estoEsUnaURLdePega.com",
            "id": 9
        },
    "languaje": "Ingles",
    "isMCU": false,
    "mainCharacterName": "Katniss",
    "producer": "Jon Kilik",
    "distributor": "Lionsgate"
}
*/
const postMovie = (req,res)=>{
    pelicula = new Movie(req.body.title,req.body.realiseYear,req.body.nationality,req.body.genre,req.body.photo);
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

//-- Crea un nuevo actor/actriz y lo añade al array
const postActor = (req,res)=> {
    let answer;
    if (req.body.profession == 'Actor' || req.body.profession == 'Actriz') {
        let actor = new Professional(req.body.name, req.body.age, req.body.weight, req.body.height, req.body.isRetired, req.body.nationality, req.body.oscarsNumber, req.body.profession, req.body.photo, req.body.id);
        pelicula.actors.push(actor);
        answer = 'Actor/Actriz añadido correctamente'
    }else{
        answer = 'Profesión erronea. El método postActor solo acepta como profession "Actor" o "Actriz"';
    }
    res.send(answer);
}

//-- Crea un nuevo Director
const postDirector = (req,res)=> {
    let answer;
    if (req.body.profession == 'Director') {
        let director = new Professional(req.body.name, req.body.age, req.body.weight, req.body.height, req.body.isRetired, req.body.nationality, req.body.oscarsNumber, req.body.profession, req.body.photo, req.body.id);
        pelicula.director = director;
        answer = 'Director añadido correctamente'
    }else{
        answer = 'Profesión erronea. El método postDirector solo acepta como profession "Director"';
    }
    res.send(answer);
}

//-- Crea un nuevo guionista
const postWriter = (req,res)=> {
    let answer;
    if (req.body.profession == 'Guionista') {
        let guionista = new Professional(req.body.name, req.body.age, req.body.weight, req.body.height, req.body.isRetired, req.body.nationality, req.body.oscarsNumber, req.body.profession, req.body.photo, req.body.id);
        pelicula.writer = guionista;
        answer = 'Guionista añadido correctamente'
    }else{
        answer = 'Profesión erronea. El método postDirector solo acepta como profession "Guionista"';
    }
    res.send(answer);
}

//-- Modifica los datos de la pelicula
const putMovie = (req,res)=>{
    if (req.body.title != undefined) {
        pelicula.title = req.body.title;
    }
    if (req.body.realiseYear != undefined) {
        pelicula.realiseYear = req.body.realiseYear;
    }
    if (req.body.nationality != undefined) {
        pelicula.nationality = req.body.nationality;
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
    let answer = "Película modificado correctamente"

    res.send(answer);
}

//-- Modifica los datos de un Actor
const putActor = (req,res)=>{
    //-- Siempre se le debe pasar el id para identificar el actor que se quiere
    //-- modificar.
    let answer;
    if (pelicula.actors != null) {
        if (req.body.id != undefined) {
            let i = 0;

            while (req.body.id != pelicula.actors[i].id && i < pelicula.actors.length) {
                i++;
            }

            if (req.body.id == pelicula.actors[i].id) {
                if (req.body.name != undefined) {
                    pelicula.actors[i].name = req.body.name;
                }
                if (req.body.age != undefined) {
                    pelicula.actors[i].age = req.body.age;
                }
                if (req.body.weight != undefined) {
                    pelicula.actors[i].weight = req.body.weight;
                }
                if (req.body.height != undefined) {
                    pelicula.actors[i].height = req.body.height;
                }
                if (req.body.isRetired != undefined) {
                    pelicula.actors[i].isRetired = req.body.isRetired;
                }
                if (req.body.nationality != undefined) {
                    pelicula.actors[i].nationality = req.body.nationality;
                }
                if (req.body.oscarsNumber != undefined) {
                    pelicula.actors[i].oscarsNumber = req.body.oscarsNumber;
                }
                if (req.body.photo != undefined) {
                    pelicula.actors[i].photo = req.body.photo;
                }
                if (req.body.id != undefined) {
                    pelicula.actors[i].id = req.body.id;
                }
                answer = "Actor modificado correctamente."
            }
        }else{
            answer = "Se necesita el id del actor que se desea modificar"
        }
    }else{
        answer = "No existe ningún actor/actriz";
    }

    res.send(answer);
}

//-- Modifica los datos de un Director
const putDirector = (req,res)=>{
    if (req.body.name != undefined) {
        pelicula.director.name = req.body.name;
    }
    if (req.body.age != undefined) {
        pelicula.director.age = req.body.age;
    }
    if (req.body.weight != undefined) {
        pelicula.director.weight = req.body.weight;
    }
    if (req.body.height != undefined) {
        pelicula.director.height = req.body.height;
    }
    if (req.body.isRetired != undefined) {
        pelicula.director.isRetired = req.body.isRetired;
    }
    if (req.body.nationality != undefined) {
        pelicula.director.nationality = req.body.nationality;
    }
    if (req.body.oscarsNumber != undefined) {
        pelicula.director.oscarsNumber = req.body.oscarsNumber;
    }
    if (req.body.photo != undefined) {
        pelicula.director.photo = req.body.photo;
    }
    if (req.body.id != undefined) {
        pelicula.director.id = req.body.id;
    }
    let answer = "Director modificado correctamente."

    res.send(answer);
}

//-- Modifica los datos de un Director
const putWriter = (req,res)=>{
    if (req.body.name != undefined) {
        pelicula.writer.name = req.body.name;
    }
    if (req.body.age != undefined) {
        pelicula.writer.age = req.body.age;
    }
    if (req.body.weight != undefined) {
        pelicula.writer.weight = req.body.weight;
    }
    if (req.body.height != undefined) {
        pelicula.writer.height = req.body.height;
    }
    if (req.body.isRetired != undefined) {
        pelicula.writer.isRetired = req.body.isRetired;
    }
    if (req.body.nationality != undefined) {
        pelicula.writer.nationality = req.body.nationality;
    }
    if (req.body.oscarsNumber != undefined) {
        pelicula.writer.oscarsNumber = req.body.oscarsNumber;
    }
    if (req.body.photo != undefined) {
        pelicula.writer.photo = req.body.photo;
    }
    if (req.body.id != undefined) {
        pelicula.writer.id = req.body.id;
    }
    let answer = "Guionista modificado correctamente."

    res.send(answer);
}

//-- Elimina la pelicula
const delMovie = (req,res)=>{
    pelicula = null;
    let answer = 'Pelicula eliminada correctamente'
    res.send(answer);
}

//-- Elimina el actor indicado por la id
const delActor = (req,res)=>{
    let answer;
    if (req.body.id != undefined) {
        let i = 0;

        while (req.body.id != pelicula.actors[i].id && i < pelicula.actors.length) {
            i++;
        }

        if (req.body.id == pelicula.actors[i].id) {
            pelicula.actors.splice(i,1);
            answer = "Actor eliminado correctamente."
        }
    }else{
        answer = "Se necesita el id del actor que se desea eliminar"
    }
    res.send(answer);
}

//-- Elimina el director
const delDirector = (req,res)=>{
    pelicula.director = null;
    let answer = 'Director eliminado correctamente'
    res.send(answer);
}

//-- Elimina el guionista
const delWriter = (req,res)=>{
    pelicula.writer = null;
    let answer = 'Guionista eliminado correctamente'
    res.send(answer);
}

module.exports = {getMovie, getActor, getDirector, getWriter, postMovie, postActor, postDirector, postWriter, putMovie, putActor, putDirector, putWriter, delMovie, delActor, delDirector, delWriter};