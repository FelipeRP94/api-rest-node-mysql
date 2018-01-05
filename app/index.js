const express = require('express');
const bodyParser = require('body-parser');
const data = require('data');
const connection = require('./common').connection;
const userRoutes = require('./routes/user/user.routes');
const session = require('express-session');

const app = express();

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))


// Con use especifico que estoy utilizando un middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api/users', userRoutes(connection))

app.listen(4000);