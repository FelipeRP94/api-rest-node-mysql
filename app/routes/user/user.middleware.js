const userQueries = require('./user.queries');

exports.loadUserById = (connection) => (req, res, next) => {

    connection.query(userQueries.getUserById, [req.params.userId], (error, user) => {

        if(error){
            res.status(500).send(error);
        } else if (user){
            req.user = user;
            next();
        }else{
            res.status(404).send('not user with that id');
        }
    });
};