
import './MoviList.css';

function MoviList( props) {
    const {Title,Year,imdbID,Type,Poster} = props.movie;
    return (
      <div className='card' onClick={()=>props.onMovieSelect(imdbID)}>
      <div className='poster'>
      <img src={Poster}/>
      </div>
       
       <div className='movieName'>{Title}</div>
       <div className='infoColomn'>
         <span className='movieinfo'>Year: {Year}</span>
         <span className='movieinfo'>Type: {Type}</span>
       </div>
      </div>
    );
  };
export default MoviList;