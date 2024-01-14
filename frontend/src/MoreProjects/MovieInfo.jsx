import React, { useEffect } from 'react'
import mif from '../Portfolio/Projects/movieinfo.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
const MovieInfo = () => {
  useEffect(() => {
    console.log("Rendered")
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <div>
      <div className="container bg-dark  mt-5 w-100 d-flex justify-content-center pt-5 p-3" >
        <div className="text-dark p-3" >
          <h4 className='card-title mb-2 text-info text-uppercase'>Movie &nbsp; &nbsp; Info &nbsp; &nbsp; App</h4>
          <img src={`${mif}`} className='w-100 img-thumbnail rounded-3' style={{ border: "1px solid rgb(211,23,111)", boxShadow: "black 0px 0px 15px 1px", borderBottom: "3px solid rgb(211,23,111)" }} alt="Social Media" data-aos="fade-left" />
          <div className='card-body'>
            <div className=' container mt-3 text-light'>

              <div className='card-body text-light'>
                <div className='card-title my-3 fw-bold text-light'>Short Review Movie Info App</div>
                <div className='card-text my-3 text-light'>
                  This is the app created with the help of ReactJS, NodeJS and MySQL.
                  <br />
                  It has the functionalty to search the movie in the search bar and hit enter to search the movie by the name you provided
                  <br />
                  All the information are valid and certified from the IMDB rating
                  <br />
                  Also has the property to search by the name of the movie and it will give the huge number of movies present with the same name or related name
                </div>
              </div>
            </div>
            <a href='/' className='btn mx-3'>Home </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo