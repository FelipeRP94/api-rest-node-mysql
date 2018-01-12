const express = require('express');
const citaRouter = express.Router();
const middleware = require('./cita.middleware');

const routes = (connection) => {

    const citaController = require('./cita.controller')(connection);

    citaRouter.route('/')
        .get(citaController.getCitas)
        .post(citaController.postCita);

        citaRouter.use('/:citaId', middleware.loadCitaById(connection));

        citaRouter.route('/:citaId')
        .get((req, res) => res.json(req.cita))
        .put(citaController.putCita)
        .delete(citaController.deleteCita);
        
        citaRouter.route('/user/:userId').get(citaController.getCitasDeUsuario);
        citaRouter.route('/tratamiento/:tratamientoId').get(citaController.getCitasDeTratamiento);
        citaRouter.route('/fechas').get(citaController.getCitasEntreFecha);



    return citaRouter;
};

module.exports = routes;