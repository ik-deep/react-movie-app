import axios from 'axios';
import { useState } from 'react';
import './Header.css';
import MoviList from './MoviList';
import MovieInfo from './MovieInfo';
export const API_KEY ="c52f81a5";


const Header = () => {
    const [searchQuery,updateSearchQuery]=useState();
    const [timeoutId,updateTimeoutId] = useState();
    const [movieList,updateMovieList]=useState();
    const [selectedMovie,onMovieSelect]=useState();

    
    const fetchData= async(searchString)=>{
        const response = await axios.get(`http://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`);
       updateMovieList(response.data.Search)
    }


    const onTextChange = (event)=>{
       clearTimeout(timeoutId);
      updateSearchQuery(event.target.value)
      const timeout = setTimeout(()=>fetchData(event.target.value));
      updateTimeoutId(timeout);
    }
  return (
    <>
    <div className="container">
    <div className='logo'>
    <img alt="" src="https://www.iconpacks.net/icons/1/free-movie-icon-850-thumb.png"></img>
    <h3 className='heading'>React Movie App</h3>
    </div>
    <div className="search">
      <input type="text" className="searchTerm" placeholder="What are you looking for?" value={searchQuery}  onChange={onTextChange}/>
   </div>
   </div>
   {selectedMovie && <MovieInfo selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
  <div className='MovieContainer'>
   {movieList?.length ? movieList.map((movie,index)=><MoviList key={index} movie={movie} onMovieSelect={onMovieSelect}/>) : <h1 style={{color:'white'}}>No Movie Search...</h1>}

   </div>
  
   </>
   
  )
}

export default Header