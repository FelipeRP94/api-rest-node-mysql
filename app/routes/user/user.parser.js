const data = require('data');

exports.bodyParser = (req) => {

    const user = data.User;

    user.nombre = req.body.nombre;
    user.apellidos = req.body.apellidos;
    user.email = req.body.email;
    user.password = req.body.password;
    user.telefono = req.body.telefono;
    user.dni = req.body.dni;
    user.direccion = req.body.direccion; 
    
    return user;
}