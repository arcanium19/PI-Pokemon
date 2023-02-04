const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { pokemonRouters } = require('./pokemonRoutes');
const { tipoRouters } = require('./tipoRoutes')


const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

mainRouter.use('/pokemons', pokemonRouters);
mainRouter.use('/types', tipoRouters);


module.exports = mainRouter;
