import React from 'react'
import Typewriter from 'typewriter-effect'
import './Home.css'
import fb from '../Portfolio/Images/facebook.svg'
import git from '../Portfolio/Images/github.svg'
import tw from '../Portfolio/Images/twitter.svg'
import gl from '../Portfolio/Images/google.svg'
import Img from '../Portfolio/Images/entry.jpg'
import gfg from '../Portfolio/Images/gfg.svg'
const Home = () => {
    return (
        <div className='pt-5 min-vh-100'>
            <div className='w-100 home d-flex align-items-center' id='home'>
                <div className='container'>
                    <div className='row my-4 d-flex align-items-center'>
                        <div className='col-sm-12 col-md-6 col-lg-6 homeTextPart text-light'>
                            <div className='card p-3 text-light rounded-2 mb-3' style={{ background: "transparent", backdropFilter: "blur(100px)" }}>
                                <b className='welcome fs-1 fw-bold text-uppercase' >Welcome</b>
                                <h1>
                                    <Typewriter
                                        options={{
                                            autoStart: true,
                                            loop: true,
                                            delay: 30,
                                            strings: ["This is Web Developer's Profile", "MERN Stack Developer."]
                                        }}
                                    />
                                </h1>
                                <p>
                                    I am a Anirudh. Graduate from GBPUAT [ Govind Ballabh Pant University of Agriculture and Technology, Bachelor of Technology ( IT )]<br/>
                                    I am Expert in Data Structure and Algoritms, Frontend Developement and also backend Developement..
                                </p>
                                <div className='icons my-3'>
                                    <a href='https://www.facebook.com/login/'><img src={fb} className='bg-light p-1 rounded rounded-5 mx-1' /></a>
                                    <a href='https://github.com/anirudhkala110'><img src={git} className='bg-light p-1 rounded rounded-5 mx-1' /></a>
                                    <a href='https://twitter.com/i/flow/login'><img src={tw} className='bg-light p-1 rounded rounded-5 mx-1' /></a>
                                    <a href='https://mail.google.com/'><img src={gl} className='bg-light p-1 rounded rounded-5 mx-1' /></a>
                                    <a href='https://auth.geeksforgeeks.org/user/anirudhkala110jrcasetooyt/'><img src={gfg} style={{ width: "25px" }} className='bg-light p-1 rounded rounded-5 mx-1' /></a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center col-sm-12 col-md-6 col-lg-6'>
                            <img src={Img} className='' style={{ maxHeight: "450px" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home