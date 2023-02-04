
const { getPokemonByType } = require('../Controllers/tiposControllers');

const TraerLosTipos = async (req, res)=>{
    try {
    const response = await getPokemonByType();
    res.status(200).send(response);
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = {
    TraerLosTipos,
};