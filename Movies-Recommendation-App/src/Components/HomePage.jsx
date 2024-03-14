import React, {useState, useEffect} from 'react'
import Movies from './Movies'
import {Link} from 'react-router-dom'


function HomePage(){

  const [searchTerm, setSearchTerm] = useState('');
  const[HomeMovies, setHomeMovies] = useState([])
 

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=97f7490422c2cfab9e2f1045e6f6b524")
    .then(res => res.json())
    .then(json => setHomeMovies(json.results))
  },[])

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <h1 className='text-white font-serif font-bold text-4xl text-center mt-11'>Team 9 Movies Recommedation Site</h1>

      <div className='flex justify-center mt-11'>
        <input
          className='border-[2px] h-[2.5rem] w-[50%] rounded-lg font-serif text-xl p-3'
          type="text"
          placeholder='Search ...'
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {searchTerm && <Movies searchTerm={searchTerm} />}

      <div className='flex gap-4 overflow-x-auto p-4'>
        {
           HomeMovies.map(movie => (

             <div key={movie.id} className='flex-shrink-0 mr-4 mt-[5rem] transition-transform duration-300 transform-gpu hover:scale-110'>

      <Link to={`/${movie.id}`}>
              <img className='w-[rem] h-[20rem] object-cover rounded-lg ' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              <h1 className='text-white font-serif font-bold'>{movie.title}</h1>
       </Link>
            </div>
           ))
        }
      </div>
    </div>
  )
}

export default HomePage
