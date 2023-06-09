/**
 * Clase para crear un objeto Pokemon
 */
class Pokemon{
    /**
     * Constructor de la clase
     * @param {string} name - Nombre del Pokemon
     * @param {string} photo - URL de la foto del Pokemon
     * @param {Array<string>} abilities - Habilidades del Pokemon
     */
    constructor(name,photo,abilities){
        this.name = name;
        this.photo = photo;
        this.abilities = abilities;
    }
}

function searchPokemon(){
    //-- Obtener nombre del pokemon a través del input
    let name = document.getElementById("pokemon_name").value;
    //-- Asegurar que el nombre esta escrito en minúscula para poder realizar la
    //-- petición a la API Pokemon.
    let pokemon_name = name.toLowerCase();
    getPokemon(pokemon_name);
}

/**
 * Función para hacer una petición GET a la API Pokemon
 * @param {string} pokemon_name - Nombre del Pokemon del que se quiere conocer sus datos.
 */
function getPokemon(pokemon_name){
    const params = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`, params)
        .then(res => res.json())
        .then(res => {
            //-- Con los datos obtenidos en la respuesta de la API,
            //-- creamos un objeto pokemon.
            let photo = res.sprites.other.home.front_default;
            /**
             * @type Array<string>
             */
            let abilities = [];
            for (let i = 0; i < res.abilities.length; i++) {
                abilities.push(res.abilities[i].ability.name);
            }
            let pokemon = new Pokemon(pokemon_name,photo,abilities);

            //-- Utilizando el objeto pokemon obtenido, mostramos los datos
            //-- por patalla.
            let card = document.getElementById("card");
            let card_title = document.getElementById("card_title");
            let card_img = document.getElementById("card_img");
            let table = document.getElementById("table");
            let msg_error = document.getElementById("msg_error");
            card_title.innerHTML = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
            card_img.src = pokemon.photo;
            table.innerHTML = `
                <tr>
                    <th>Habilidades</th>
                </tr>
            `
            for (let i = 0; i < pokemon.abilities.length; i++) {
                table.innerHTML += `
                    <tr>
                        <td>${pokemon.abilities[i][0].toUpperCase()+ pokemon.abilities[i].substring(1)}</td>
                    </tr>
                `
            }
            msg_error.innerHTML = '';
        })
        .catch(err => {
            console.error(err)
            card_title.innerHTML = 'Pokemon';
            card_img.src = './img/pokeball.png';
            table.innerHTML = '';
            msg_error.innerHTML = 'No existe ningún Pokemon con el nombre indicado'
        });
}