import React, {useState, useEffect} from 'react'


function HomePage(){

  return (
    <div>

      
      <h1 className='text-white font-serif font-bold text-4xl text-center mt-11'>Team 9 Movies Recommedation Site</h1>

      <div className='flex justify-center mt-11'>
        <input  className='border-[2px] h-[2.5rem] w-[50%] rounded-lg font-serif text-xl p-3'
        type="text"
        placeholder='Search ...'/>
      </div>

    

    </div>
  )
}

export default HomePage
