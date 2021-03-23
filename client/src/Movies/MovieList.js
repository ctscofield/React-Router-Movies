import React from 'react';
import { Link, useRouteMatch, useHistory } from "react-router-dom" 

export default function MovieList(props) {
  
  return (
    <div className="movie-list">
      {props.movies.map(movie => ( 
        <MovieDetails key={movie.id} movie={movie} />
        
        
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  const { url } = useRouteMatch()
  const history = useHistory()
  const route = () => {
    let path = `movies/${props.movie.id}`
    console.log(path)
  }

  return (
    <div className="movie-card">
      <Link to={`/${props.movie.id}`}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      </Link>
    </div>
  );
}
