const { default: axios } = require('axios');
const { Pokemon, Tipo } = require('../db');

const getPokemonByType = async ()=> {
    const infoAPI = (await axios.get("https://pokeapi.co/api/v2/type")).data.results;

    infoAPI.map(elemento => Tipo.findOrCreate({where: {Nombre: elemento.name}}));

    const infoDB = await Tipo.findAll();
    
    return infoDB;

}

module.exports = {
    getPokemonByType,
};