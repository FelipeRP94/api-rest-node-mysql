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

const copy = (source, destination) => {
    for(const key in source){
        if(source.hasOwnProperty(key) && !source['_id']){
            destination[key] = source[key];
        }
    }
}

exports.patchParser = (req) => {
    copy(req.body, req.user);
    return req;
}