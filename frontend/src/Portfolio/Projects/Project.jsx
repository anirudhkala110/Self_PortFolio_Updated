import React, { useEffect, useState } from 'react'
import code from './movieinfo.jpg'
import folder from './blogging.jpg'
import settings from './youtube.jpg'
import './Project.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Project = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    const [data, setData] = useState([])
    const [msg, setMsg] = useState(null)
    const [msg_type, setMsg_type] = useState(null)

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.defaults.withCredentials = true
        axios.get('http://localhost:8097/api/getAllUpdates')
            .then(res => {
                setData(res.data.updates)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false); // Set loading to false when the request is complete
            });
    })
    const [login, setLogin] = useState(false)
    useEffect(() => {
        axios.defaults.withCredentials = true
        axios.get('http://localhost:8097/api/protectedRoute')
            .then(res => {
                setLogin(res.data.login)
            })
            .catch(err => console.log(err))
    })
    const navigate = useNavigate()
    const handleRoute = (route) => {
        navigate(`/${route}`);
    }

    const handleRead = (id) => {
        navigate(`/details/${id}`);
    }

    const handleDelete = (selectedResourceId) => {
        const confirm = window.confirm("Are you sure to delete this project? This is irreversible.")
        if (confirm) {
            axios.delete(`http://localhost:8097/api/resources/${selectedResourceId}`)
                .then(res => {
                    setMsg(res.data.msg)
                    setMsg_type(res.data.msg_type)
                   setInterval(() => {
                        setMsg(null)
                    }, 2000)
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <div className='w-100 min-vh-100'>
            <div className='projects w-100 mt-5 ' id='projects'>
                <div className='myservicesText pt-5'>
                    <h1 className='text-uppercase text-light'>MY <span>Projects</span></h1><br />
                    <hr />
                </div>
                {
                    login && <div className='w-100 d-flex justify-content-end px-4'><button className='btn btn-success' onClick={e => handleRoute('add')}>Add Project</button></div>
                }
                {
                    msg && <center className={`w-100 px-5  ${msg_type==="good"?'text-success':''}`}><div className='p-2 text-dark bg-white rounded'>{msg}</div></center>
                }
                <div className={`container text-center ${!login && 'mt-5'}`}>
                    <div className="row">
                        {/* <div className="col-sm-12 col-md-6 col-lg-4 p-3" data-aos="fade-right"> */}
                        {
                            data.map((data, i) => (
                                <div className="col-sm-12 col-md-6 col-lg-4 p-3" key={i} >
                                    <div className="card text-dark p-3" >
                                        <img src={`http://localhost:8097/File/${data.file}`} alt={`${data.file}, original image is not available due to network issue. . .`} className='w-100 rounded-3' style={{ border: "1px solid rgb(211,23,111)", boxShadow: "black 0px 0px 15px 1px", borderBottom: "3px solid rgb(211,23,111)", maxHeight: "170px" }} />
                                        <div className='card-body'>
                                            <h4 className='card-title'>{data.title}</h4>
                                            <div style={{ whiteSpace: 'pre-line' }} className='mb-1'
                                            >{data.head}...
                                            </div>
                                            <button href='' className='btn btn-outline-dark m-1' onClick={e => handleRead(data.title)}>More Information</button>
                                            { login && <button href='' className='btn btn-outline-danger m-1' onClick={e => handleDelete(data.id)}>Delete</button> }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Project