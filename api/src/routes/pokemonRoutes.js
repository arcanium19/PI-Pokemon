const { default: axios } = require('axios');
const { Router } = require('express');
//importo los handlers
const { getTodosLosPokemon, getPokemonConID, nuevoPokemon } = require('../Handlers/pokemonHandler')
//creo una constante getpokemon que me instancie router cada vez que la use
const pokemonRouters = Router();

//Defino todos los gets con sus rutas y sus respectivos Handlers
pokemonRouters.get('', getTodosLosPokemon);
pokemonRouters.get('/', getTodosLosPokemon);
pokemonRouters.get('/:pokeId', getPokemonConID);
pokemonRouters.post('', nuevoPokemon);
pokemonRouters.post('/', nuevoPokemon);


//exporto todas las rutas+handlers
module.exports = {
    pokemonRouters
}