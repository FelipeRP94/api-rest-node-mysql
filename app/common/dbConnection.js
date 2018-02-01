const mysql = require('mysql');

const dataConnection = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api_rest'
}

const dataConnectionRemote = {
    host: '	fugfonv8odxxolj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'tm6thls90rwszbws',
    password: 'qe14a3x595bu86zz',
    database: 'g3hlx9xe22auxnfr'
}

const connection = mysql.createConnection( { ...dataConnectionRemote });

module.exports = connection