import axios from "axios";
import { useEffect, useState } from "react";
import './MovieInfo.css'
import { API_KEY } from "./Header";

const MovieInfo = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`)
      .then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
  
  return (
    <div className="InfoContainer">
    {movieInfo ? (
        <>
      <img className='CoverImage' src={movieInfo?.Poster} alt={movieInfo?.Title}></img>

      <div className="InfoColomn">
        <div className="MovieName">
        {movieInfo?.Type} : {movieInfo?.Title}
       
        <div className="Movieinfo">
          IMDB Rating : <span>{movieInfo?.imdbRating}</span>
        </div>
        <div className="Movieinfo">
          Released Date : <span>{movieInfo?.Released}</span>
        </div>
        <div className="Movieinfo">
        Director Name : <span>{movieInfo?.Director}</span>
        </div>
        <div className="Movieinfo">
        Actors Name : <span>{movieInfo?.Actors}</span>
        </div>
        <div className="Movieinfo">
        Writer Name : <span>{movieInfo?.Writer}</span>
        </div>
        <div className="Movieinfo">
        Language : <span>{movieInfo?.Language}</span>
        </div>
        <div className="Movieinfo">
        Country : <span>{movieInfo?.Country}</span>
        </div>
        <div className="Movieinfo">
        Runtime : <span>{movieInfo?.Runtime}</span>
        </div>
        <div className="Movieinfo">
        Awards : <span>{movieInfo?.Awards}</span>
        </div>
        </div>
        <span className="close" onClick={() => props.onMovieSelect()}>X</span>
      </div>
      </>
    ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default MovieInfo;
