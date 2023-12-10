const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
class MySQLConnector{
    constructor(){
       this.pool = mysql.createPool({
            host: '127.0.0.1',
            user: 'ronviccuevas',
            password:'Codingchal1!',
            database: 'MoviesDB',
            waitForConnections: true,
            connectionLimit: 100,
            charset:'utf8mb4',
            queueLimit: 250
          });
          this.registerThreadCounter()
    }
    registerThreadCounter(){
        this.pool.on('connection',(connection) => console.log(`New connection established with server on thread #: ${connection.threadId}`))
    }
    
}

module.exports = new MySQLConnector();