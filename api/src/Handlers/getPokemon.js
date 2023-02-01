//Importo todos los controllers (las logicas de las requests)
const { getAllPokemons, getPokemonByName, getPokemonByID } = require('../Controllers/getControllers');

const getTodosLosPokemon = async (req, res) =>{
    const { name } = req.query;

    try {
        if(name){
            const finded = await getPokemonByName(name);
            res.status(200).send(finded);
        }else{
            const Pokedex = await getAllPokemons();
            res.status(200).send(Pokedex);
        }
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const getPokemonConID = async (req, res)=>{
    const { pokeId } = req.params;
    try {
        const finded = await getPokemonByID(pokeId);
        res.status(200).send(finded);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}



module.exports = {
    getTodosLosPokemon,
    getPokemonConID,
}