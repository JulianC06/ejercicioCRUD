const express = require('express');
const router = express.Router();

const {obtenerNombres, anadirNombre, actualizarNombre, borrarNombre} = require('../Controlador/nombres');

router.route('/')
    .get(obtenerNombres)
    .post(anadirNombre);

//esto lo que hace es localhost:5000/nombres/id
router.route('/:cod')
    .put(actualizarNombre)
    .delete(borrarNombre);

module.exports = router;