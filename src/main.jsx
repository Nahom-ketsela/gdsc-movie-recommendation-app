import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import movie from './assets/movie.png'

import HomePage from './Components/HomePage.jsx'
import About from './Components/About.jsx'
import FavouritePage from './Components/FavouritePage.jsx'
import Movies from './Components/Movies.jsx'
import MoviesDetail from './Components/MoviesDetail.jsx'
import { FavoriteProvider } from './Components/FavoriteContext.jsx'
import { Footer } from './Components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FavoriteProvider>
    <BrowserRouter>
   <nav className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg h-16 mx-5 my-4 p-2 font-bold text-xl text-white'>
    <img className='float-left h-10 mr-10' src={movie} alt="" />
    <h1 className='inline-block mr-8'>Movies 9</h1>
    <Link to='' className='ml-[500px] mr-8 p-  hover:text-indigo-700 hover:underline underline-offset-8  active:text-teal-100 transition duration-300 ease-in-out'>Home</Link>
    <Link to='/Movies' className='mr-8 p-2  hover:text-indigo-700 hover:underline underline-offset-8  active:text-teal-100 transition duration-300 ease-in-out'>All Movies</Link>
     <Link to='/Favourite' className='mr-8 p-2  hover:text-indigo-700 hover:underline underline-offset-8  active:text-teal-100 transition duration-300 ease-in-out'>Favourite</Link>
     <Link to='/About' className='mr-8 p-2 hover:text-indigo-700 hover:underline underline-offset-8  active:text-teal-100 transition duration-300 ease-in-out'>About Us</Link>
   
</nav>


      <hr />

      <Routes>
        <Route path='' element={<HomePage />}/>
        <Route path='/:id' element={<MoviesDetail />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Favourite' element={<FavouritePage />}/>
        <Route path='/Movies' element={<Movies />}/>
        <Route path='/Movies/:id' element={<MoviesDetail />}/>
      </Routes>
     <Footer/>
    </BrowserRouter>
  </FavoriteProvider>
)