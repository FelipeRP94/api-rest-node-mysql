const parser = require('./cita.parser');
const citaQueries = require('./cita.queries');

const citaController = (connection) => {

    const handleError = (err, res) => res.status(500).send(err);

    const getCitas = (req, res) => {

        connection.query(citaQueries.getAllCitas, (error, rows) => {
            if(error) handleError(error, res);
            else  res.status(200).json(rows);
        });
    }

    const getCitasDeUsuario = (req, res) => {

        connection.query(citaQueries.getCitasDeUsuario, [req.params.userId], (error, rows) => {
            if(error) handleError(error, res);
            else  res.status(200).json(rows);
        });
    }

    const getCitasDeTratamiento = (req, res) => {

        connection.query(citaQueries.getCitasDeTratamiento, [req.params.tratamientoId], (error, rows) => {
            if(error) handleError(error, res);
            else  res.status(200).json(rows);
        });
    }

    const getCitasEntreFecha = (req, res) => {

        connection.query(citaQueries.getCitasEntreFecha, Object.values(req.body), (error, rows) => {
            if(error) handleError(error, res);
            else  res.status(200).json(rows);
        });
    }

    const postCita = (req, res) => {

        //if (validator(req, res)) {

            connection.query(citaQueries.insertCita, Object.values(req.body), (error, result) => {

                if (error){
                    handleError(error, res);
                } else if (result && result.insertId){
                    res.status(200).json(result);
                } else {
                    res.status(500, 'error al insertar la cita');
                }
            });
        //}
    }

    const putCita = (req, res) => {

        //if (validator(req, res)) {

            const cita = parser.bodyParser(req);

            connection.query(citaQueries.putTratamiento, [cita.usuario, cita.tratamiento, cita.fecha, cita.id], (error, result) => {
                if (error){
                    handleError(error, res);
                } else if (result){
                    res.status(200).json(result);
                } else {
                    res.status(500, 'error al actualizar la cita');
                }
            });

        //}
    }

    const deleteCita = (req, res) => {

        connection.query(citaQueries.deleteCita, [req.params.citaId], (error, result) => {

            if (error){
                handleError(error, res);
            } else if (result){
                res.status(200).json(result);
            } else {
                res.status(500, 'error al eliminar la cita');
            }
        });
    }

    return{
        getCitas,
        getCitasDeTratamiento,
        getCitasDeUsuario,
        getCitasEntreFecha,
        postCita,
        putCita,
        deleteCita
    }
}

module.exports = citaController;