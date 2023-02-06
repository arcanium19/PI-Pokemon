const { default: axios } = require('axios');
const { Pokemon, Tipo } = require('../db');

const getPokemonByType = async ()=> {
    const infoAPI = (await axios.get("https://pokeapi.co/api/v2/type")).data.results;

    infoAPI.map(elemento => Tipo.findOrCreate({where: {Nombre: elemento.name}}));

    const infoDB = await Tipo.findAll( {attributes: ["Nombre"]});
    
    return infoDB;

}

const getIDbyType = async(nombreTipo)=>{
    const infoDB = await Tipo.findOne({where: {Nombre: nombreTipo}});
    const infoClean = infoDB.ID;
    return infoClean
}



module.exports = {
    getPokemonByType,
    getIDbyType,
};