const { default: axios } = require('axios');
const { Router } = require('express');
const { getTodosLosPokemon, getPokemonConID } = require('../Handlers/getPokemon')

const getPokemons = Router();

getPokemons.get('/pokemons', getTodosLosPokemon);
getPokemons.get('pokemons/:pokeId', getPokemonConID);



module.exports = {
    getPokemons
}