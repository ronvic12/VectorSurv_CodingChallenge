const MySQLConnector = require('./dbConnection');
module.exports = class MySQLWrapper {

    static createQuery({query,params}) {
        return new Promise(function(resolve, reject) {
            MySQLConnector.pool.getConnection((err, connection) => {
                if (err) {
                    return fail(err);
                }
                connection.query(query, params,(err,rows)=>{
                    connection.release();
                    if(err){
                        console.log(err);
                        return fail(err);
                    }
                    return succeed(rows);
                })
            })
        })
    }
}