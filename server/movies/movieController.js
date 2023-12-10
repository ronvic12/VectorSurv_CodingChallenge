
const movieService = require('./movieService')
module.exports.movieForm = async(req,res,next) => {
let data = {
    movieTitle:req.body.movieTitle,
    releaseDate:req.body.releaseDate,
    movieRating:req.body.movieRating,
    genre:req.body.genre,
    studioemail:req.body.studioemail,
}

    let insertandshow = await movieService.insertandshowForm(data)

    res.send(insertandshow)
}