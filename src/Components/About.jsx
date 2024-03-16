import React from 'react'
import './about.css' 
import about2 from '../assets/about2.avif'
import movies5 from '../assets/movies5.avif'
function About() {
  return (
    <div className='flex flex-col justify-center'>
        <h1 className=' flex justify-center font-serif font-bold text-4xl m-11 text-white '> About Us </h1>
         
            <div className="about">
            <img className='about-image' src={about2} alt="" />

    <div className='about-description'>
      <p>
      Welcome to Movies 9, your ultimate destination for personalized movie recommendations!
    Our mission is to revolutionize the way you discover and enjoy movies. With an extensive
      database of films from all genres and eras, Movie 9 uses cutting-edge algorithms to 
      tailor recommendations to your unique tastes and preferences. Whether you're a fan of classic 
      cinema, indie gems, or the latest blockbusters, our platform is designed to help you uncover hidden
      treasures and revisit old favorites. Dive into a world of cinematic wonders with Movie 9,
        where your next favorite movie is just a click away!
      </p>
    </div>
            </div>

            <div className="about">
           

    <div className='about-description'>
      <p>
      At Movies 9, we believe that every movie has the power to inspire, entertain, and connect. 
      That's why we've created a space where movie enthusiasts can explore a vast collection of films 
      tailored to their tastes. Our innovative platform uses advanced recommendation technology to curate
       a selection of movies that align with your preferences, ensuring you never run out of great films 
       to watch. From timeless classics to the latest releases, Movies 9 is your trusted guide in the 
       vast world of cinema. Join us on this cinematic journey and discover movies that resonate with you, 
       one recommendation at a time.
      </p>
    </div>

    <img className='about-image' src={movies5} alt="" />
            </div>
       


            <div className='customer-feedback'>
        <div className="customer-feedback-container">
          <h1> User Feedback</h1>
          <div className="customer-feedback-fields">
            <input type="text" placeholder='Your name' />
            <input type="email" placeholder='Email Address' />
            <input className='message' type="text" placeholder='Message' />
          </div>
          <button>Send</button>
          
          <div className="customer-feedback-agree">
          <input type="checkbox" name='' id='' />
          <p> By proceeding, I accept the Terms of Service and Privacy Policy,
             and consent to receive updates and marketing communications. </p>
        </div>
        </div>
        

      </div>
        </div>
  )
}

export default About
