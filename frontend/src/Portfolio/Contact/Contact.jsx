import React, { useState, useRef, useEffect } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import Footer from '../Footer/Footer';
const Contact = () => {
    const form = useRef();
    const [name, setName] = useState()
    const [mobile, setMobile] = useState()
    const [email, setEmail] = useState()
    const [query, setQuery] = useState()
    const [finalquery, setFQuery] = useState()
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_btybmpq', 'template_vpftqfp', form.current, 'lWfqzGma3N6tppX4T')
            .then((result) => {
                console.log(result)
                alert("Your Message Has been sent.\n")
            }, (error) => {
                console.log(error.text);
            });
    }
    const handleQuery = (e) => {
        setQuery(e.target.value)
        setDate(currentDate)
        setTime(currentTime)
        setFQuery(name + "\n" + email + "\n" + mobile + "\n" + date + "\n" + time + "\n" + e.target.value)
    }
    return (
        <div>
            <div className='contact text-center text-white pt-5 min-vh-100' id='contact'>
                <br />
                <h1>CONTACT</h1>
                <hr />
                <div className="mx-md-auto text-center container justify-content-center">
                    {/* <form className='from-group mt-2' onSubmit={(e) => handleSubmit(e)} ref={form}>
                        <div className="form-group mt-2">
                            <label>User Name</label>
                            <input type='text' className='form-control' id="name" placeholder='Enter User Name' />
                        </div>
                        <div className="form-group mt-2">
                            <label>Email</label>
                            <input type='email' className='form-control' id="email" placeholder='Enter User Email' />
                        </div>
                        <div className="form-group mt-2">
                            <label>Message</label>
                            <textarea className='form-control' id="msg" placeholder='Message' cols={30} rows={10} />
                        </div>
                        <button type='button' className='btn my-3' onClick={handleSubmit}>Message Me</button>
                    </form> */}
                    <form onSubmit={(e) => handleSubmit(e)} ref={form} >
                        <div className="form-group">
                            <label className="fw-bold" htmlFor="formGroupName">Name</label>
                            <input type="text" className="form-control rounded-0" id="formGroupName" placeholder="Your Valid Name" name="user_name" value={name} onChange={e => setName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label className="fw-bold" htmlFor="formGroupMobile">Mobile Number</label>
                            <input type="number" className="form-control rounded-0" id="formGroupMobile" placeholder="Mobile Number" name="mobile" value={mobile} onChange={e => setMobile(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label className="fw-bold" htmlFor="formGroupEmail">Email Address</label>
                            <input type="email" className="form-control rounded-0" id="formGroupEmail" placeholder="Email Address" name="user_email" value={email} onChange={e => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label className="fw-bold" htmlFor="formGroupQuery">Message</label>
                            <textarea
                                type="text"
                                className="form-control rounded-0"
                                cols={30}
                                rows={5}
                                style={{ resize: "none" }}
                                id="formGroupQuery"
                                value={query}
                                onChange={e => handleQuery(e)}
                                placeholder="Enter your query here" required
                            />
                            <textarea name="message" value={finalquery} style={{ display: "none" }} />
                        </div>
                        <button className="btn border-0 rounded-0 my-2 rounded-3 send-mail" value="Send" onClick={(e) => handleSubmit(e)}>Send Mail</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact