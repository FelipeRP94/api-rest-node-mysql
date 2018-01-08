const data = require('data');

exports.bodyParser = (req) => {

    const tratamiento = data.Tratamiento;

    tratamiento.nombre = req.body.nombre;
    tratamiento.descripcion = req.body.descripcion;
    tratamiento.duracion = req.body.duracion;

    return tratamiento;
}