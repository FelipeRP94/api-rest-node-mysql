const parser = require('./tratamiento.parser');
const tratamientoQueries = require('./tratamiento.queries');
const validator = require('./tratamiento.validator').tratamientoValidator;

const tratamientoController = (connection) => {

    const handleError = (err, res) => res.status(500).send(err);

    const getTratamientos = (req, res) => {

        connection.query(tratamientoQueries.getAllTratamientos, (error, rows) => {
            if(error) handleError(error, res);
            else  res.status(200).json(rows);;
        });
    }

    const postTratamiento = (req, res) => {

        if (validator(req, res)) {

            connection.query(tratamientoQueries.insertTratamiento, Object.values(req.body), (error, result) => {

                if (error){
                    handleError(error, res);
                } else if (result && result.insertId){
                    res.status(200).json(result);
                } else {
                    res.status(500, 'error al insertar el tratamiento');
                }
            });
        }
    }

    const putTratamiento = (req, res) => {

        if (validator(req, res)) {

            const tratamiento = parser.bodyParser(req);

            connection.query(tratamientoQueries.updateTratamiento, [tratamiento.nombre, tratamiento.descripcion, tratamiento.duracion, req.params.tratamientoId], (error, result) => {
                if (error){
                    handleError(error, res);
                } else if (result){
                    res.status(200).json(result);
                } else {
                    res.status(500, 'error al actualizar el tratamiento');
                }
            });

        }
    }

    const deleteTratamiento = (req, res) => {

        connection.query(tratamientoQueries.deleteTratamiento, [req.params.tratamientoId], (error, result) => {

            if (error){
                handleError(error, res);
            } else if (result){
                res.status(200).json(result);
            } else {
                res.status(500, 'error al eliminar el tratamiento');
            }
        });
    }

    return{
        getTratamientos,
        postTratamiento,
        putTratamiento,
        deleteTratamiento
    }
}

module.exports = tratamientoController;