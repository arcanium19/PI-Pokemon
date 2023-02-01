const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getPokemons} = require('./getRoutes');


const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

mainRouter.get('/pokemons', getPokemons);


module.exports = mainRouter;
