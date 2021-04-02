import { useState } from 'react';
import { getMovies } from '../utils/movieService';
import Movie from './Movie';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const click = async () => {
    const data = await getMovies();
    setMovies(data);
  };

  return (
    <section>
      <h2>Movies</h2>
      <ul>
        {movies?.length > 0 && 
        movies.map(movie => 
        <Movie key={movie.id} title={movie.title} actor={movie.actor}/>)}
      </ul>
      <button onClick={click} type="button">
        Click me
      </button>
    </section>
  );
};

export default Movies;
