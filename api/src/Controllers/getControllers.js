const { default: axios } = require('axios');
const { Pokemon, Tipo } = require('../db');

//Defino algunas funciones utiles que me ayuden con la logica

const CadaPokemon = (infoAPI)=>{
    infoAPI.map(pokemon =>{
        return {
            ID: pokemon.order,
            Nombre: pokemon.name,
            Vida: pokemon.stats[0].base_stat,
            Ataque: pokemon.stats[1].base_stat,
            Defensa: pokemon.stats[2].base_stat,
            Velocidad: pokemon.stats[5].base_stat,
            Altura: pokemon.height,
            Peso: pokemon.weight,
            Imagen: pokemon.sprites.other.dream_world.front_default,
            Tipo: pokemon.type

        }
    })
}

const getAllPokemons = async ()=>{
    //Traer info de la API
    //const infoAPI = (await axios.get('https://pokeapi.co/api/v2/pokemon')).data; //un array de objetos(pokedex)
    
    const apiUrl =  (await axios.get('https://pokeapi.co/api/v2/pokemon',{headers:{"Accept-Encoding":"null"}}));

    //Traer info de la DB
    const infoDB = await Pokemon.findAll();
    
    let misPokes = [];
    //Filtrar info API (Traer nombre, imagen y Tipo de cada pokemon)
    let APIFiltrada = []

    //Aqui pushea la info de cada pokemon
    apiUrl.data.results.map(pokemon => misPokes.push(axios.get(pokemon.url, {headers:{"Accept-Encoding":"null"}})));

    //me trae todos los pokemons
    const pokemones = await Promise.all(misPokes)

    


    //Filtro info de la API
    APIFiltrada = pokemones.map(pokemon => {
        return {
            Nombre: pokemon.data.name,
            imagen: pokemon.data.sprites.other.dream_world.front_default,
            tipo: pokemon.data.types.map(elemento => elemento.type.name)
        }
    })



    const DBFiltrada = infoDB.map(pokemon =>{
        return {
            Nombre: pokemon.Nombre,
            Imagen: pokemon.Imagen,
            Tipo: pokemon.Tipo,
        }
    })

    //Uno ambas info
    return [...APIFiltrada, ...DBFiltrada];

}

module.exports = {
    getAllPokemons,
}

