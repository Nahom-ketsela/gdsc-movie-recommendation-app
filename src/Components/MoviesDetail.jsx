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
      <div className="flex flex-row bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg shadow-lg overflow-hidden">
        <div className="p-4">
          {!isImageLoaded && <div className="animate-pulse h-full w-full bg-gray-300 rounded-lg"></div>}
          <img
            className={`rounded-lg object-cover transition-transform duration-300 transform hover:scale-105 ${isImageLoaded ? '' : 'hidden'}`}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
        <div className="p-4">
          <h2 className='font-serif font-bold text-2xl text-black'>{movie.title}</h2>
          <h2 className='font-mono font-bold text-xl text-black'>{movie.release_date}</h2>
          <p className='font-serif text-xl text-black'>{movie.overview}</p>
          <div className="mt-2">
          <button onClick={addToFavorites}
        className='font-serif font-bold h-[2.5rem] p-1 rounded-lg bg-blue-400 hover:bg-blue-500 active:bg-blue-400'>Add to Favorite 
</button>

          </div>
        </div>
      </div>
    ) : <h2 className='text-black m-2'>Loading ... </h2>}
</div>

  );
}

export default MoviesDetail;
