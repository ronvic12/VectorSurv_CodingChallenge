// creating an object literal for simplicity 
const movieDAL = require('./movieDAL')
module.exports = class movieService {
    static async insertandshowForm(data){
        return new Promise(async(resolve,reject) => {
            try{
                   let returnalldata = await movieDAL.insertandshowForm(data);
                   return resolve(returnalldata)
            }catch(e){
                console.log(e)
                return reject(e)
            }
        })
    }
}