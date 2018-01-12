const tratamientoQueries = require('./tratamiento.queries');

exports.loadTratamientoById = (connection) => (req, res, next) => {

    connection.query(tratamientoQueries.getTratamientoById, [req.params.tratamientoId], (error, tratamiento) => {

        if(error){
            res.status(500).send(error);
        } else if (tratamiento){
            req.tratamiento = tratamiento;
            next();
        }else{
            res.status(404).send('not tratamiento with that id');
        }


    });


}