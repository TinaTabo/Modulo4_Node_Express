const start = (req,res)=>{
    //-- Notificación peticion recibida desde el cliente al servidor.
    console.log("Petición recibida desde el cliente");

    //-- Mostrar los datos de la petición recibida por consola.
    console.log(`URL de la petición: ${req.url}`);
    console.log(`Método de la petición: ${req.method}`);
    console.log(`User-agent (Localizado en la cabecera): ${req.headers["user-agent"]}`);

    let respuesta = {ok: true, message: 'Recibido!'};
    // res.set('content-type', 'application/json'); -> al definir la variable respuesta y enviarla, el
    // tipo de contenido se establece solo como application/json.
    // res.status(200).send(respuesta) -> no es necesario ya que por defecto si la peticion se realiza
    // correctamente, el protocolo http asigna el status como 200 OK.
    res.send(respuesta)
}

const bye = (req,res)=>{
    console.log("Petición recibida de bye desde el cliente");
    let respuesta = {ok: true, message: 'Adios!'};
    res.send(respuesta)
}
module.exports = {start,bye};