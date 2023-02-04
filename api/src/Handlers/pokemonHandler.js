//Importo todos los controllers (las logicas de las requests)
const { getAllPokemons, getPokemonByName, getPokemonByID, createPokemon } = require('../Controllers/pokemonControllers');


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

const nuevoPokemon = async (req, res)=>{
    const { name, hp, atk, def, speed, altura, peso, imgURL, tipo } = req.body;


    try {
        if(name){
            const response = await createPokemon(name, hp, atk, def, speed, altura, peso, imgURL, tipo);
            res.status(200).send(response);
        }else{
            res.status(400).send('El campo nombre es obligatorio');
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}


module.exports = {
    getTodosLosPokemon,
    getPokemonConID,
    nuevoPokemon,
}