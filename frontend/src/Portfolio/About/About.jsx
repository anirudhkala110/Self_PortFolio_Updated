import React, { useEffect } from 'react'
import pic from './sidepic.jpeg'
import './About.css'
import aos from 'aos'
import 'aos/dist/aos.css'
import Services from '../Services/Services'
import Footer from '../Footer/Footer'
const About = () => {
    useEffect(() => {
        aos.init({ duration: 3000 })
    }, [])
    return (
        <div>
            <div className='w-100 about d-flex pt-2' id='about'>
                <div className='container mt-3'>
                    <div className='fs-1 fw-bold btn pb-3 w-100 text-uppercase' style={{ color: "rgb(211,23,111)" }}>
                        About
                        <hr className='-webkit-linear-gradient(right,black,white,white,black)' style={{ height: "8px" }} />
                    </div>
                    <div className='row pt-2  px-5'>
                        {/* <div className="col-12 col-md-6 col-lg-6 aboutImagePart rounded rounded-5" data-aos="fade-right"> */}
                        <div className="col-12 col-md-6 col-lg-6 aboutImagePart rounded rounded-5 d-flex justify-content-center align-items-center">
                            <img src={pic} alt="Here is the developer's Image" className="aboutImagePart rounded rounded-3 mb-2" style={{maxWidth:"300px",maxHeight:"300px"}} />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 aboutTextPart">
                            {/* <div className="col-12 col-md-6 col-lg-6 aboutTextPart" data-aos="fade-left"> */}
                            <div>
                                <h3>Hello ,  I am Anirudh Kala</h3>
                                <p>Anirudh Kala is a highly skilled and versatile developer known for his expertise in web development, software development, and backend development.
                                    With a passion for creating innovative and efficient solutions,
                                    Anirudh  has established himself as a go-to professional in the tech industry.
                                </p>
                                <table className=''>
                                    <tbody>
                                        <tr>
                                            <td className='pe-5'>Name</td>
                                            <td>: Anirudh Kala</td>
                                        </tr>
                                        <tr>
                                            <td className='pe-5'>Age</td>
                                            <td>: 24</td>
                                        </tr>
                                        <tr>
                                            <td className='pe-5'>Permanent Address</td>
                                            <td>: Chharba, Shaspur Dehradun</td>
                                        </tr>
                                        <tr>
                                            <td className='pe-5'>Work Address</td>
                                            <td>: Khanpur Extension, New Delhi</td>
                                        </tr>
                                        <tr>
                                            <td className='pe-5'>Phone  Number</td>
                                            <td>: 7668490213</td>
                                        </tr>
                                        <tr>
                                            <td className='pe-5'>Email</td>
                                            <td>: anirudhkala110@gmail.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a href='https://drive.google.com/file/d/1LP5p4TC8uYBW80YdsHcxfYn72bklxrXo/view?usp=drive_link'><button className='downloadbtn w-100'>Download Resume</button></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
      {/* <Footer /> */}
        </div>
    )
}

export default About