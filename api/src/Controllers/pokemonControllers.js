const { default: axios } = require('axios');
const { Pokemon, Tipo } = require('../db');
const { getIDbyType } = require('./tiposControllers');

//Defino algunas funciones utiles que me ayuden con la logica
const getAllPokemons = async ()=>{
    //Traer info de la API
    
    const apiUrl =  (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40'));

    //Traer info de la DB
    const infoDB = await Pokemon.findAll({
            include: {
                model: Tipo,
                attributes: ["Nombre"],
                through: { attributes: []}
            }});
    
    let misPokes = [];
    //Aqui pushea la info de cada pokemon
    apiUrl.data.results.map(pokemon => misPokes.push(axios.get(pokemon.url)));


    //me trae todos los pokemons
    const pokemones = await Promise.all(misPokes)

    //Filtro info de la API
    const APIFiltrada = pokemones.map(pokemon => {
        return {
            ID: pokemon.data.id,
            Nombre: pokemon.data.name,
            Imagen: pokemon.data.sprites.other.home.front_default,
            Tipo: pokemon.data.types.map(elemento => elemento.type.name),
        }
    })
    //Filtro la info de la API
    const DBFiltrada = infoDB.map(pokemon =>{
        return {
            ID: pokemon.ID,
            Nombre: pokemon.Nombre,
            Imagen: pokemon.Imagen,
            Tipo: infoDB[0].dataValues.Tipos.map(e=>e.dataValues).map(elemento=>elemento.Nombre),
        }
    })

    //Uno ambas info
    return [...APIFiltrada, ...DBFiltrada];

}

const getPokemonByName = async (name)=>{
    const nameMinuscula = name.toLowerCase();
    const infoAPI = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameMinuscula}`)).data
    const infoDB = await Pokemon.findAll({ where: { Nombre: nameMinuscula },
        include: {
            model: Tipo,
            attributes: ["Nombre"],
            through: { attributes: []}
        }})


    let pokemonBuscadoAPI = []
    pokemonBuscadoAPI.push({

                ID: infoAPI.id,
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
            });
            
    infoAPIClean = await Promise.all(pokemonBuscadoAPI);

    if(infoDB.length>0){
        let pokemonBuscadoDB = []
        pokemonBuscadoDB.push({
                    ID: infoDB[0].dataValues.ID,
                    Nombre: infoDB[0].dataValues.Nombre,
                    Vida: infoDB[0].dataValues.Vida,
                    Ataque: infoDB[0].dataValues.Ataque,
                    Defensa: infoDB[0].dataValues.Defensa,
                    Velocidad: infoDB[0].dataValues.Velocidad,
                    Altura: infoDB[0].dataValues.Altura,
                    Peso: infoDB[0].dataValues.Peso,
                    Imagen: infoDB[0].dataValues.Imagen,
                    Tipo: infoDB[0].dataValues.Tipos.map(e=>e.dataValues).map(elemento=>elemento.Nombre),
                    DB: infoDB[0].dataValues.DB,
            })

        const infoMixed = [...pokemonBuscadoAPI, ...pokemonBuscadoDB];
        return infoMixed;
    }
  
    return pokemonBuscadoAPI;
}

const getPokemonByID = async (id)=>{
    
    const pokeId = id;
    if(pokeId.includes('-')){
        const infoDB = await Pokemon.findAll({ where: { ID: id },
            include: {
                model: Tipo,
                attributes: ["Nombre"],
                through: { attributes: []}
            }});

            console.log(infoDB)
        return {
            ID: infoDB[0].dataValues.ID,
            Nombre: infoDB[0].dataValues.Nombre,
            Vida: infoDB[0].dataValues.Vida,
            Ataque: infoDB[0].dataValues.Ataque,
            Defensa: infoDB[0].dataValues.Defensa,
            Velocidad: infoDB[0].dataValues.Velocidad,
            Altura: infoDB[0].dataValues.Altura,
            Peso: infoDB[0].dataValues.Peso,
            Imagen: infoDB[0].dataValues.Imagen,
            Tipo: infoDB[0].dataValues.Tipos.map(e=>e.dataValues).map(elemento=>elemento.Nombre),
            DB: infoDB[0].dataValues.DB,
        }
    }else{
        const infoAPI = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)).data;
        return {
                ID: infoAPI.id,
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

}

const createPokemon = async (name, hp, atk, def, speed, altura, peso, imgURL, tipos)=>{

    const nombreMinuscula = name.toLowerCase();
    const newPokemon = await Pokemon.create({
        Nombre: nombreMinuscula,
        Vida: hp,
        Ataque: atk,
        Defensa: def,
        Velocidad: speed,
        Altura: altura,
        Peso: peso,
        Imagen: imgURL,
    });

    // findAll({
//     where: id:id,
//     include: {
//         model: Tipo,
//         attributes: ["nombre"],
//         through: { attributes: []}
//     }
// })

    tipos.map(async (elemento) => {
        const typesID = await getIDbyType(elemento);
        newPokemon.addTipos(typesID);
    })

    if(newPokemon){
        return newPokemon;
    }
    else{
        return 'Error, No se pudo crear el pokemon,'
    }

}



module.exports = {
    getAllPokemons,
    getPokemonByName,
    getPokemonByID,
    createPokemon,
}