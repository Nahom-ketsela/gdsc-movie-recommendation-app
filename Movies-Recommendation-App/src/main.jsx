import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import HomePage from './Components/HomePage.jsx'
import About from './Components/About.jsx'
import FavouritePage from './Components/FavouritePage.jsx'
import Movies from './Components/Movies.jsx'
import MoviesDetail from './Components/MoviesDetail.jsx'
import { FavoriteProvider } from './Components/FavoriteContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FavoriteProvider>
    <BrowserRouter>
      <nav className='flex justify-end font-bold font-serif text-xl bg-gradient-to-r from-green-500 to-lime-500 rounded-lg shadow-lg m-4 p-1'>
        <Link to='' className='p-4 hover:text-blue-500 active:text-teal-100'>Home</Link>
        <Link to='/About' className='p-4 hover:text-blue-500 active:text-teal-100'>About</Link>
        <Link to='/Favourite' className='p-4 hover:text-blue-500 active:text-teal-100'>Favourite</Link>
        <Link to='/Movies' className='p-4 hover:text-blue-500 active:text-teal-100'>All Movies</Link>
      </nav>

      <Routes>
        <Route path='' element={<HomePage />}/>
        <Route path='/:id' element={<MoviesDetail />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Favourite' element={<FavouritePage />}/>
        <Route path='/Movies' element={<Movies />}/>
        <Route path='/Movies/:id' element={<MoviesDetail />}/>
      </Routes>
    </BrowserRouter>
  </FavoriteProvider>
)