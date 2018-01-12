const express = require('express');
const tratamientoRouter = express.Router();
const middleware = require('./tratamiento.middleware');

const routes = (connection) => {

    const tratamientoController = require('./tratamiento.controller')(connection);

    tratamientoRouter.route('/')
        .get(tratamientoController.getTratamientos)
        .post(tratamientoController.postTratamiento);

    tratamientoRouter.use('/:tratamientoId', middleware.loadTratamientoById(connection));

    tratamientoRouter.route('/:tratamientoId')
        .get((req, res) => res.json(req.tratamiento))
        .put(tratamientoController.putTratamiento)
        .delete(tratamientoController.deleteTratamiento);

    return tratamientoRouter;
};

module.exports = routes;