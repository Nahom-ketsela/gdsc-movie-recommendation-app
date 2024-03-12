import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'

function Movies(){

  const[Movies, setMovies] = useState([]);


  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=97f7490422c2cfab9e2f1045e6f6b524")
    .then(res =>res.json())
    .then(json => setMovies(json.results))
  },[])

   console.log(Movies)
  return (
    <div className="flex flex-wrap gap-4  justify-center">
        {

         Movies.map((movies, index)=>(

          <div className="" key={movies.id}>

        <Link to={`/Movies/${movies.id}`}>

            <img className="h-[20rem] rounded-lg object-cover transition-transform duration-300 transform hover:scale-110" key={index} src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}/>
            
        </Link>

            <div className="font-serif font-bold text-white">
              <h3>{movies.title}</h3>
              
            </div>
            </div>

         ))

        }
       
    </div>
  )
}

export default Movies