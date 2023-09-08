const mysql = require('mysql2')

const conn = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'auladb',
    password: '1247',
})

module.exports = conn.promise()