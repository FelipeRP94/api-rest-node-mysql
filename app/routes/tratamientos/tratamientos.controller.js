const parser = require('./tratamientos.parser');
const tratamientosQueries = require('./tratamientos.queries');
const validator = require('./tratamientos.validator').tratamientoValidator;

const tratamientosController = (connection) => {

    const handleError = (err, res) => res.status(500).send(err);

    const getTratamientos = (req, res) => {

        connection.query(tratamientosQueries.getAllTratamientos, (error, rows) => {
            if(error) handleError(error, res);
            else  res.status(200).json(rows);;
        });
    }

    const postTratamiento = (req, res) => {

        if (validator(req, res)) {

            connection.query(tratamientosQueries.insertTratamiento, Object.values(req.body), (error, result) => {

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

            connection.query(tratamientosQueries.updateTratamiento, [tratamiento.nombre, tratamiento.descripcion, tratamiento.duracion, req.params.tratamientoId], (error, result) => {
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

        connection.query(tratamientosQueries.deleteTratamiento, [req.params.tratamientoId], (error, result) => {

            if (error){
                handleError(error, res);
            } else if (result){
                res.status(200).json(result);
            } else {
                res.status(500, 'error al actualizar el usuario');
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

module.exports = tratamientosController;