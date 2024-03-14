import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {FavoriteContext} from "./FavoriteContext.jsx";

function MoviesDetail() {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=97f7490422c2cfab9e2f1045e6f6b524`)
      .then(res => res.json())
      .then(json => setMovie(json))
      .catch(error => console.error('Error fetching movie:', error));
  }, [params.id]);

  const { favorites, setFavorites } = useContext(FavoriteContext);

  const addToFavorites = () => {
    setFavorites([...favorites, movie]);
  };

  return (
    <div className="p-4 m-4">
      {movie ? (
        <div className="p-4 m-4 bg-white rounded-lg shadow-lg">
          {!isImageLoaded && <div className="animate-pulse h-[25rem] w-[20rem] bg-gray-300 rounded-lg m-2"></div>}
          <img
            className={`rounded-lg h-[25rem] w-[20rem] object-cover transition-transform duration-300 transform hover:scale-105 m-2 ${isImageLoaded ? '' : 'hidden'}`}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            onLoad={() => setIsImageLoaded(true)}
          />
          <h2 className='font-serif font-bold text-2xl text-black m-2'>{movie.title}</h2>
          <h2 className='font-mono font-bold text-xl text-black m-2'>{movie.release_date}</h2>
          <h2 className='font-serif text-xl text-black m-2'>{movie.overview}</h2>
        </div>
      ) : <h2 className='text-black m-2'>Loading ... </h2>}

      <div className="m-2">
        <button onClick={addToFavorites}
                className=' font-serif font-bold h-[2.5rem] p-1 rounded-lg bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-300 m-2'>Add
          to Favorite ❤️
        </button>
      </div>
    </div>
  );
}

export default MoviesDetail;
