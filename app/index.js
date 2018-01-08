const express = require('express');
const bodyParser = require('body-parser');
const data = require('data');
const connection = require('./common').connection;
const userRoutes = require('./routes/user/user.routes');
const tratamientosRoutes = require('./routes/tratamientos/tratamientos.routes');
const session = require('express-session');

const app = express();

// Con use especifico que estoy utilizando un middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api/users', userRoutes(connection));
app.use('/api/tratamientos', tratamientosRoutes(connection));

app.listen(4000);