const citaQueries = require('./cita.queries');

exports.loadCitaById = (connection) => (req, res, next) => {

    connection.query(citaQueries.getCitaById, [req.params.citaId], (error, cita) => {

        if(error){
            res.status(500).send(error);
        } else if (cita){
            req.cita = cita;
            next();
        }else{
            res.status(404).send('not cita with that id');
        }


    });


}