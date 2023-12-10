const mysql = require('../db/dbWrapper')


module.exports = class movieDAL{
    static async insertandshowForm(data){
        return new Promise(async(resolve,reject) => {
            try{
                    let insertData = await mysql.createQuery({
                        query: `INSERT INTO Movies(movieTitle, releaseDate,movieRating,genre,studioemail) 
                        VALUES (?,?,?,?,?) as new on
                        DUPLICATE KEY UPDATE 
                        releaseDate = new.releaseDate,
                        movieRating = new.movieRating,
                        genre = new.genre,
                        studioemail = new.studioEmail`,
                        params: [data.movieTitle,data.releaseDate,data.movieRating,data.genre,data.studioemail]
                    })
                    let returndata = await mysql.createQuery({
                        query: `SELECT * FROM Movies`,
                        params: []
                    })
                    return resolve(returndata)
            }catch(e){
                console.log(e)
                return reject(e)
            }
        })
    }
}