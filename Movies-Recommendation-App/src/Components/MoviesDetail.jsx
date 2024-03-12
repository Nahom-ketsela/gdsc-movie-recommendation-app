import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MoviesDetail() {
    const params = useParams();
    const [movie, setMovie] = useState(null);
    

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=97f7490422c2cfab9e2f1045e6f6b524`)
            .then(res => res.json())
            .then(json => setMovie(json))
            .catch(error => console.error('Error fetching movie:', error));
    }, [params.id]);

   

    return (
        <div>

            {movie ? (
                <div>
                    <img className='rounded-lg h-[25rem] w-[20rem] object-cover transition-transform duration-300 transform hover:scale-110' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    <h2 className='font-serif font-bold text-2xl text-white'>{movie.title}</h2>
                    <h2 className='font-mono font-bold text-xl text-white'>{movie.release_date}</h2>
                    <h2 className='font-serif text-xl text-white'>{movie.overview}</h2>
                    
                </div>
            ) : <h2 className='text-white'>Loading ... </h2>}
            
<div>
    <button className=' font-serif font-bold h-[2.5rem] p-1 rounded-lg bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-300'>Add to Favorite ❤️</button>
</div>
            
        </div>
    );
}

export default MoviesDetail;
