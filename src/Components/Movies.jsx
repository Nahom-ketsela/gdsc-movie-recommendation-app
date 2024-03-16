import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

function Movies({searchTerm}){

  const[Movies, setMovies] = useState([]);
  const[isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(()=>{
    const url = searchTerm
      ? `https://api.themoviedb.org/3/search/movie?api_key=97f7490422c2cfab9e2f1045e6f6b524&query=${searchTerm}`
      : `https://api.themoviedb.org/3/discover/movie?api_key=97f7490422c2cfab9e2f1045e6f6b524`;

    fetch(url)
      .then(res =>res.json())
      .then(json => setMovies(json.results))
  },[searchTerm])

  return (
    <div className="grid grid-cols-4 gap-4 p-4 m-4">
      {
        Movies.map((movies, index)=>(
          <div className="p-4 m-4 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg shadow-lg" key={movies.id}>
            <Link to={`/Movies/${movies.id}`}>
              <img
                className={`h-[20rem] rounded-lg object-cover transition-transform duration-300 transform hover:scale-105 m-2 ${isImageLoaded ? '' : 'border-2 border-gray-300'}`}
                key={index}
                src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                onLoad={() => setIsImageLoaded(true)}
              />
              <div className="p-2 m-2">
                <h3 className="font-serif font-bold text-2xl text-white">{movies.title}</h3>
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 m-2">
                See Details
              </button>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

Movies.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default Movies
