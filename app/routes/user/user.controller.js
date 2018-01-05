const parser = require('./user.parser');

const userController = (connection) => {
    
    const handleError = (err, res) => res.status(500).send(err);

    const getUsers = (req, res) => {
        connection.query('SELECT * FROM usuarios', (error, rows) => {

            if (error) handleError(error, res);
            else res.json(200, rows);            
        });
    }

    const postUser = (req, res) => {
        connection.query('INSERT INTO usuarios (nombre, apellidos, email, password, telefono, direccion, dni) VALUES (?,?,?,?,?,?,?)', Object.values(req.body), (error, result) => {

            if (error){
                handleError(error, res);
            } else if (result && result.insertId){
                res.json(200, result);
            } else {
                res.status(500, 'error al insertar el usuario');
            }
        });
    }

    const putUser = (req, res) => {

        const user = parser.bodyParser(req);

        connection.query('UPDATE usuarios SET nombre = ?, apellidos = ?, email = ?, password = ?, telefono = ?, dni = ?, direccion = ? where id = ?', [user.nombre, user.apellidos, user.email, user.password, user.telefono, user.dni, user.direccion, req.params.userId], (error, result) => {
            
            if (error){
                handleError(error, res);
            } else if (result){
                res.json(200, result);
            } else {
                res.status(500, 'error al actualizar el usuario');
            }
        });
    }

    const deleteUser = (req, res) => {

        connection.query('DELETE FROM usuarios WHERE id = ?', [req.params.userId], (error, result) => {
            
            if (error){
                handleError(error, res);
            } else if (result){
                res.json(200, result);
            } else {
                res.status(500, 'error al actualizar el usuario');
            }
        });

    }

    return{
        getUsers,
        postUser,
        putUser,
        deleteUser
    }
}

module.exports = userController;

