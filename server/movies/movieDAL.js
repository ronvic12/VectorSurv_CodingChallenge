const mysql = require('../db/dbWrapper')


module.exports = class movieDAL{
    static async insertandshowForm(data){
        return new Promise(async(resolve,reject) => {
            try{
                    let insertData = await mysql.createQuery({
                        
                    })
            }catch(e){}
        })
    }
}