const getUser = (req,res)=>{
    //-- recoger valor del name a traves del query
    let respuesta = req.query.name;
    res.send(respuesta)
}

const postUser = (req,res)=>{
    //-- recoger valores por el body del cliente
    let name = req.body.name;
    let surname = req.body.surname;
    let age = req.body.age;

    //-- crear objeto json con los valores obtenidos
    let user = {
        name: name,
        surname: surname,
        age: age
    }

    //-- enviar el objeto al cliente
    res.send(user)
}
module.exports = {getUser,postUser};