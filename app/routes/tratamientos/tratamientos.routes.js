const express = require('express');
const tratamientosRouter = express.Router();
const middleware = require('./tratamientos.middleware');

const routes = (connection) => {

    const tratamientosController = require('./tratamientos.controller')(connection);

    tratamientosRouter.route('/')
        .get(tratamientosController.getTratamientos)
        .post(tratamientosController.postTratamiento);

    tratamientosRouter.use('/:tratamientoId', middleware.loadTratamientoById(connection));

    tratamientosRouter.route('/:tratamientoId')
        .get((req, res) => res.json(req.tratamiento))
        .put(tratamientosController.putTratamiento)
        .delete(tratamientosController.deleteTratamiento);

    return tratamientosRouter;
};

module.exports = routes;