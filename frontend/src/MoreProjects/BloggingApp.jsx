import React, { useEffect } from 'react'
import blogging from '../Portfolio/Projects/blogging.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
const BloggingApp = () => {
  useEffect(() => {
    console.log("Rendered")
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <div>
      <div className="container bg-dark  mt-5 w-100 d-flex justify-content-center pt-5 p-3" >
        <div className="text-dark p-3" >
          <h4 className='card-title mb-2 text-uppercase text-info'>Blogging App</h4>
          <img src={`${blogging}`} className='w-100 img-thumbnail rounded-3' style={{ border: "1px solid rgb(211,23,111)", boxShadow: "black 0px 0px 15px 1px", borderBottom: "3px solid rgb(211,23,111)" }} alt="Social Media" data-aos="fade-left" />
          <div className='card-body'>
            <div className=' container mt-3 text-light'>
              <div className='card-body text-light'>
                <div className='card-title my-3 fw-bold text-light'>Blogging App Clone</div>
                <div className='card-text my-3 text-light'>
                  This is the clone of youtube created with the help of ReactJS, NodeJS and MySQL.
                  <br />
                  It has the functionalty to create account, delete account, upload post, deleted uploaded post,edit uploaded post, edit user information etc..
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

export default BloggingApp