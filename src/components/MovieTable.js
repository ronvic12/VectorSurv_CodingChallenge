import React from "react";
import './main.css'
function MovieTable({movieData}){
    return (
        <div className="movieTable">
          {movieData && movieData.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Release Date</th>
                  <th>Movie Rating</th>
                  <th>Genre</th>
                  <th>Studio Email</th>
                </tr>
              </thead>
              <tbody>
                {movieData.map((movie, index) => (
                  <tr key={index}>
                    <td>{movie.movieTitle}</td>
                    <td>{new Date(movie.releaseDate).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}</td>
                    <td>{movie.movieRating}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.studioemail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p></p>
          )}
        </div>
      );
    };
export default MovieTable;