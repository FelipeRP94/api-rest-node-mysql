
const handleError = (err, res) => res.status(500).send(err);

exports.tratamientoValidator = (req, res) => {


    if (req.body.nombre === ''){
        handleError('El nombre del tratamiento es obligatorio', res);
        return false;
    }

    if (req.body.descripcion === ''){
        handleError('La descripcion del tratamiento es obligatoria', res);
        return false;
    }

    if (req.body.duracion === 0){
        handleError('La duración del tratamiento es obligatoria', res);
        return false;
    }

    return true;
}