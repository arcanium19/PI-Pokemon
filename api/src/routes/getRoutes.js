const { default: axios } = require('axios');
const { Router } = require('express');
const { getTodosLosPokemon } = require('../Handlers/getPokemon')

const pokemonRouter = Router();

pokemonRouter.get('/pokemons', getTodosLosPokemon);



module.exports = {
    pokemonRouter
}