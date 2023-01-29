//Importo todos los controllers (las logicas de las requests)
const { getAllPokemons } = require('../Controllers/getControllers');

const getTodosLosPokemon = async (req, res) =>{
    try {
        const Pokedex = await getAllPokemons();
        res.status(200).send(Pokedex);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = {
    getTodosLosPokemon,
}