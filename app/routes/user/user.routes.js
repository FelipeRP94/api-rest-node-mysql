const express = require('express');
const userRouter = express.Router();
const middleware = require('./user.middleware');

const routes = (connection) => {

    const userController = require('./user.controller')(connection);

    userRouter.route('/')
        .get(userController.getUsers)        
        .post(userController.postUser);

    userRouter.use('/:userId', middleware.loadUserById(connection));

    userRouter.route('/:userId')
        .get((req, res) => res.json(req.user))
        .put(userController.putUser)
        .delete(userController.deleteUser);


    return userRouter;
}; 


module.exports = routes;