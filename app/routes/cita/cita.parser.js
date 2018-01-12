const data = require('data');

exports.bodyParser = (req) => {

    const cita = data.Cita;

    cita.usuario = req.body.usuario;
    cita.tratamiento = req.body.tratamiento;
    cita.fecha = req.body.fecha;

    return cita;
}