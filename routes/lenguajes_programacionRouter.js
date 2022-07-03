const express = require('express');
const lenguajes_programacionService = require('../services/lenguajes_programacionService');
const router = express.Router();
const service = new lenguajes_programacionService();

//Ruta que utiliza la Funcion POST para Registrar Lenguajes de Programacion
router.post('/', async function (req, res, next) {
    try {
      res.json(await service.create(req.body));
    } catch (err) {
      next(err);
    }
});

//Ruta que utiliza la Funcion GET para Consultar TODOS los Lenguajes de Programacion
router.get('/', async function (req, res, next) {
    try {
      res.json(await service.find(req.query.page));
    } catch (err) {
      next(err);
    }
});

//Ruta que utiliza la Funcion GET para Consultar de Forma Particular los Lenguajes de Programacion
router.get('/:id', async function (req, res, next) {
    try {
      res.json(await service.findOne(req.params.id));
    } catch (err) {
      next(err);
    }
});

//Ruta que utiliza la Funcion PUT para Modificar los Lenguajes de Programacion
router.put('/:id', async function (req, res, next) {
    try {
      res.json(await service.update(req.params.id, req.body));
    } catch (err) {
      next(err);
    }
});

//Ruta que utiliza la funcion DELETE para Eliminar los Lenguajes de Programacion
router.delete('/:id', async function (req, res, next) {
    try {
      res.json(await service.delete(req.params.id));
    } catch (error) {
      next(error);
    }
});
  
module.exports = router;