const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'your_password', // Change this to your MySQL root password
    database: 'myapp'
});

module.exports = pool.promise();