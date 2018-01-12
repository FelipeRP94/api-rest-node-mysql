const express = require('express');
const bodyParser = require('body-parser');
const data = require('data');
const connection = require('./common').connection;

// Routes
const userRoutes = require('./routes/user/user.routes');
const tratamientoRoutes = require('./routes/tratamiento/tratamiento.routes');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api/users', userRoutes(connection));
app.use('/api/tratamiento', tratamientoRoutes(connection));

app.listen(4000);