const { Router } = require('express');
const { TraerLosTipos } = require('../Handlers/typesHandler');

const tipoRouters = Router();

tipoRouters.get('', TraerLosTipos);
tipoRouters.get('/', TraerLosTipos);

module.exports = {
    tipoRouters,
};