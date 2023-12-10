import React,{useState} from "react";
import axios from "axios";
import MovieTable from "./MovieTable";

function Home(){
    // initialize state here 
    const [movieTitle,setmovieTitle] = useState('');
    const [releaseDate,setreleaseDate] = useState('');
    const [movieRating,setmovieRating] = useState('');
    const [genre,setgenre] = useState('');
    const [studioemail,setstudioemail] = useState('');
    const [table,settable] = useState('');

    function savemovieForm(){
        let dataentry = {
            movieTitle,
            releaseDate,
            movieRating,
            genre,
            studioemail
        }
        console.log(dataentry)
        // do axios post here 
        axios.post('http://localhost:3000/api/movies/movieForm',dataentry)
        .then((response) =>{
            settable(response.data)
        }).catch((error) =>{
            console.error(error)
        })
    }
    return (
            <div>
                <label>
                    Movie Title:
                </label>
                <input type = "text" value = {movieTitle} onChange = {(e) => setmovieTitle(e.target.value)}/>
                <label>
                    Release Date:
                </label>
                <input type = "date" value = {releaseDate} onChange = {(e) => setreleaseDate(e.target.value)}/>
                <label>
                    Movie Rating:
                </label>
                <input type = "number" value = {movieRating} min = "0" max = "10" onChange = {(e) => setmovieRating(e.target.value)}/>
                <label>
                    Genre:
                </label>
                <input type = "text" value = {genre} onChange = {(e) => setgenre(e.target.value)}/>
                <label>
                    Studio Email:
                </label>
                <input type = "email" value = {studioemail} onChange = {(e) => setstudioemail(e.target.value)}/>
                
                <button onClick={savemovieForm}>Save</button>
                <MovieTable movieData = {table} />
            </div>

    )
}
export default Home;