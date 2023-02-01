const { default: axios } = require('axios');
const { Pokemon, Tipo } = require('../db');

//Defino algunas funciones utiles que me ayuden con la logica
const getAllPokemons = async ()=>{
    //Traer info de la API
    
    const apiUrl =  (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40',{headers:{"Accept-Encoding":"null"}}));

    //const apiUrl = (await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=0`)).data;

    //Traer info de la DB
    const infoDB = await Pokemon.findAll();
    
    let misPokes = [];
    //Aqui pushea la info de cada pokemon
    apiUrl.data.results.map(pokemon => misPokes.push(axios.get(pokemon.url, {headers:{"Accept-Encoding":"null"}})));
    //apiUrl.results.map(pokemon => misPokes.push(axios.get(pokemon.url)));

    //me trae todos los pokemons
    const pokemones = await Promise.all(misPokes)


    //Filtro info de la API
    const APIFiltrada = pokemones.map(pokemon => {
        return {
            ID: pokemon.order,
            Nombre: pokemon.data.name,
            imagen: pokemon.data.sprites.other.home.front_default,
            tipo: pokemon.data.types.map(elemento => elemento.type.name)
        }
    })
    //Filtro la info de la API
    const DBFiltrada = infoDB.map(pokemon =>{
        return {
            ID: pokemon.ID,
            Nombre: pokemon.Nombre,
            Imagen: pokemon.Imagen,
            Tipo: pokemon.Tipo,
        }
    })

    //Uno ambas info
    return [...APIFiltrada, ...DBFiltrada];

}

const getPokemonByName = async (name)=>{
    const nameMinuscula = name.trim().toLowerCase();
    const infoAPI = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameMinuscula}`)).data
    const infoDB = await Pokemon.findOne({ where: {Nombre: nameMinuscula} })
    let pokemonBuscadoAPI = [];
    if(infoAPI){
        pokemonBuscadoAPI = {

                ID: infoAPI.order,
                Nombre: infoAPI.name,
                Vida: infoAPI.stats[0].base_stat,
                Ataque: infoAPI.stats[1].base_stat,
                Defensa: infoAPI.stats[2].base_stat,
                Velocidad: infoAPI.stats[5].base_stat,
                Altura: infoAPI.height,
                Peso: infoAPI.weight,
                Imagen: infoAPI.sprites.other.home.front_default,
                Tipo: infoAPI.types.map(elemento => elemento.type.name),
                DB: false,
            }    
        
    }
    if(!infoAPI && !infoDB){
        return "No se ha podido encontrar un Pokemon con ese nombre";
    }
    if(!infoDB){
        return pokemonBuscadoAPI;
    }
   

    const infoMixed = [...pokemonBuscadoAPI, ...infoDB];
    return infoMixed;
}

const getPokemonByID = async (id)=>{
    const pokeId = id;
    const infoAPI = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)).data;
    const infoDB = await Pokemon.findByPk(id);
    let pokemonBuscadoAPI = [];
    if(infoAPI){
        pokemonBuscadoAPI = {

                ID: infoAPI.order,
                Nombre: infoAPI.name,
                Vida: infoAPI.stats[0].base_stat,
                Ataque: infoAPI.stats[1].base_stat,
                Defensa: infoAPI.stats[2].base_stat,
                Velocidad: infoAPI.stats[5].base_stat,
                Altura: infoAPI.height,
                Peso: infoAPI.weight,
                Imagen: infoAPI.sprites.other.home.front_default,
                Tipo: infoAPI.types.map(elemento => elemento.type.name),
                DB: false,
            }    
        
    }
    if(!infoAPI && !infoDB){
        return "No se ha podido encontrar un Pokemon con ese ID";
    }
    if(!infoDB){
        return pokemonBuscadoAPI;
    }
   

    const infoMixed = [...pokemonBuscadoAPI, ...infoDB];
    return infoMixed;

}



module.exports = {
    getAllPokemons,
    getPokemonByName,
    getPokemonByID,
}

