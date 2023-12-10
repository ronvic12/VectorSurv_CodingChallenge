// creating an object literal for simplicity 

module.exports = class movieService {
    static async insertandshowForm(data){
        return new Promise(async(resolve,reject) => {
            try{
                    console.log(data)
            }catch(e){}
        })
    }
}