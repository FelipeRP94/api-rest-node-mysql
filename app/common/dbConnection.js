const mysql = require('mysql');

const dataConnection = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api_rest'
}

const connection = mysql.createConnection( { ...dataConnection });

module.exports = connection