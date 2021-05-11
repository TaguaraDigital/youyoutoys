const mysql = require('mysql');

// datos de la conexion en el localhost
const dbConnection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'toys'
});

//datos de la conexion en el servido de Clever Cloud

// const dbConnection = mysql.createConnection({
//     connectionLimit: 5,
//     host     : 'bfhwpw7ltojczztj7r5f-mysql.services.clever-cloud.com',
//     user     : 'u1z2dqosb0v3tjgx',
//     password : 'ZiJdnpfYO9QDkEtaiGco',
//     database : 'bfhwpw7ltojczztj7r5f'
// });

module.exports = dbConnection;