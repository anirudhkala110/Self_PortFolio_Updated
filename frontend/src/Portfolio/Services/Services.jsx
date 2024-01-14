import React, { useEffect } from 'react'
import code from './code.svg'
import folder from './folder.svg'
import settings from './settings.svg'
import './Services.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '../Footer/Footer'
const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 200 })
    }, [])
    return (
        <div className=''>
            <div className='services my-5 min-vh-100' id='services'>
                <div className='myservicesText pt-5'>
                    <h1 className='text-uppercase'>MY <span>Services</span></h1><br />
                    <hr />
                </div>
                <div className="container text-center mt-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4 p-3 mb-2" data-aos="fade-right">
                            {/* <div className="col-sm-12 col-md-6 col-lg-4 p-3"> */}
                            <div className="border service" >
                                <p className="border rounded rounded-3 bg-dark shadow p-2">
                                    <span className=''>
                                        <img className="p-2 img1" src={code} style={{ filter: "invert(1)", height: "50px" }} />
                                    </span>
                                </p>
                                <h5 className='mt-4'>Web Development Mastery</h5>
                                <hr />
                                <div className='overflow-manage px-1' style={{ maxHeight: "120px", overflowY: "auto" }}>Anirudh 's prowess in web development is evident
                                    through his ability to craft visually appealing
                                    and user-friendly websites. He has a deep
                                    understanding of HTML, CSS, and JavaScript,
                                    allowing him to create dynamic and interactive web experiences.
                                    His responsive designs ensure that websites function seamlessly
                                    across various devices and screen sizes, enhancing
                                    user engagement.</div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 p-3 mb-2" data-aos="fade-right">
                            {/* <div className="col-sm-12 col-md-6 col-lg-4 p-3"> */}
                            <div className="border service" >
                                <p className="border rounded rounded-3 bg-dark shadow p-2">
                                    <span className=''>
                                        <img className="p-2 img2" src={folder} style={{ filter: "invert(1)", height: "50px" }} />
                                    </span>
                                </p>
                                <h5 className='mt-4'>Software Development Excellence</h5>
                                <hr />
                                <div className='overflow-manage px-1' style={{ maxHeight: "120px", overflowY: "auto" }}>In the realm of software development,
                                    Anirudh  is renowned for his proficiency
                                    in designing and building robust applications.
                                    His strong grasp of programming languages
                                    such as Python and CPP empowers him
                                    to develop software that meets complex
                                    requirements while maintaining clean and maintainable code.
                                    Anirudh's attention to detail ensures that his
                                    software solutions are not only functional but
                                    also user-focused.</div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 p-3 mb-2" data-aos="fade-right">
                            {/* <div className="col-sm-12 col-md-6 col-lg-4 p-3"> */}
                            <div className="border service" >
                                <p className="border rounded rounded-3 bg-dark shadow p-2">
                                    <span className=''>
                                        <img className="p-2 img3" src={settings} style={{ filter: "invert(1)", height: "50px" }} />
                                    </span>
                                </p>
                                <h5 className='mt-4'>Backend Development Expertise</h5>
                                <hr />
                                <div className='overflow-manage px-1' style={{ maxHeight: "120px", overflowY: "auto" }}>Anirudh's backend development skills are unparalleled.
                                    He excels in creating the backbone of applications,
                                    ensuring smooth data management, security, and efficient
                                    communication between various components.
                                    He is well-versed in technologies like Node.js,
                                    Django, and Anirudh  on Rails, enabling him to architect scalable
                                    and high-performance backend systems.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hide-footer'>
                <Footer />
            </div>
        </div >
    )
}

export default Services