const handleError = (err, res) => res.status(500).send(err);

exports.userValidator = (req, res) => {


    if (req.body.nombre === ''){
        handleError('El nombre del usuario es obligatorio', res);
        return false;
    }

    if (req.body.apellidos === ''){
        handleError('Los apellidos del usuario son obligatorios', res);
        return false;
    }

    if (req.body.email === ''){
        handleError('El email del usuario es obligatorio', res);
        return false;
    }

    if (req.body.password === ''){
        handleError('La contraseña del usuario es obligatoria', res);
        return false;
    }

    if (req.body.telefono === ''){
        handleError('El teléfono del usuario es obligatorio', res);
        return false;
    }

    if (req.body.dni === ''){
        handleError('El dni del usuario es obligatorio', res);
        return false;
    }

    if (req.body.direccion === ''){
        handleError('La direccion del usuario es obligatoria', res);
        return false;
    }

    return true;
}