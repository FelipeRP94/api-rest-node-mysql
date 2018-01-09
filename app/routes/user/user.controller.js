const parser = require('./user.parser');
const userQueries = require('./user.queries');
const validator = require('./user.validator').userValidator;

const userController = (connection) => {
    
    const handleError = (err, res) => res.status(500).send(err);

    const getUsers = (req, res) => {
        connection.query(userQueries.getAllUsers, (error, rows) => {

            if (error) handleError(error, res);
            else res.json(200, rows);            
        });
    }

    const postUser = (req, res) => {

        if (validator(req, res)){

            connection.query(userQueries.insertUser, Object.values(req.body), (error, result) => {

                if (error){
                    handleError(error, res);
                } else if (result && result.insertId){
                    res.json(200, result);
                } else {
                    res.status(500, 'error al insertar el usuario');
                }
            });

        }
    }

    const putUser = (req, res) => {

        if (validator(req, res)){

            const user = parser.bodyParser(req);

            connection.query(userQueries.updateUser, [user.nombre, user.apellidos, user.email, user.password, user.telefono, user.dni, user.direccion, req.params.userId], (error, result) => {
                
                if (error){
                    handleError(error, res);
                } else if (result){
                    res.json(200, result);
                } else {
                    res.status(500, 'error al actualizar el usuario');
                }
            });

        }
    }

    const deleteUser = (req, res) => {

        connection.query(userQueries.deleteUser, [req.params.userId], (error, result) => {
            
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

