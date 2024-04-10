import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Addproject = () => {
    const [title, setTitle] = useState()
    const [heading, setHead] = useState()
    const [desc, setDesc] = useState()
    const [vlink, setVlink] = useState(null)
    const [file, setFile] = useState(null);
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('file', file);
        if (title === '' || heading === '' || desc === '') {
            alert("Enter all values. . .")
        }
        else {
            axios.post(`https://portfolio.basic2ai.info/api/saveUpdate/${title}/${heading}/${desc}`, formData, { title: title, heading: heading, desc: desc, })
                .then(res => {
                    if (res.data.error === "Unauthorized") {
                        alert("You are not authorized for uploading data. . .")
                    }
                    else if (res.data.msg === "Update saved successfully") {
                        alert(res.data.msg)
                        navigate('/projects')
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    return (
        <div className='pt-5'>
            <div className='container bg-white' style={{ minWidth: "350px" }}>
                <center className='fs-2 fw-semibold'>App Details</center>
                <form className='p-3'>
                    <div className='form-group mb-3'>
                        <label className='mb-1'>Title</label>
                        <input type='text' className='form-control' placeholder='Name of App/website' onChange={e => setTitle(e.target.value)} required />
                    </div>
                    <div className='form-group mb-3'>
                        <label className='mb-1'>Heading</label>
                        <input type='text' className='form-control' placeholder='First line about App/Website' onChange={e => setHead(e.target.value)} required />
                    </div>
                    <div className='form-group mb-3'>
                        <label className='mb-1'>Description</label>
                        <textarea type='text' className='form-control' cols={30} rows={10} placeholder='About App/Website' onChange={e => setDesc(e.target.value)} required />
                    </div>
                    <div className='form-group mb-3'>
                        <label className='mb-1'>Image</label>
                        <input
                            type='file'
                            class='form-control'
                            id='inputGroupFile01'
                            required
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                        {/* <input type='text' className='form-control mt-2' placeholder='Video Sample Link' onChange={e => setVlink(e.target.value)} required /> */}
                        {/* {
                            imge === '' || imge === null ? <div className='card my-2 p-3'>Image Preview will be here. . .</div> : <div>{file}</div>
                        } */}
                    </div>
                    <button className='btn btn-success' onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Addproject