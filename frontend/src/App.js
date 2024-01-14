import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from './Portfolio/Nav/Nav';
import Home from './Home/Home';
import About from './Portfolio/About/About';
import Services from './Portfolio/Services/Services';
import Project from './Portfolio/Projects/Project';
import Contact from './Portfolio/Contact/Contact';
import Footer from './Portfolio/Footer/Footer';
import YouTube from './MoreProjects/YouTube';
import MovieInfo from './MoreProjects/MovieInfo';
import BloggingApp from './MoreProjects/BloggingApp';
import Landing from './Landing';
import LoginRegister from './Portfolio/LoginRegister/LoginRegister';
import Addproject from './Portfolio/Projects/Addproject';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Details from './Portfolio/Projects/Details';
function App() {
  const [login, setLogin] = useState(false)
  useEffect(() => {
    axios.defaults.withCredentials = true
    axios.get('http://localhost:8097/api/protectedRoute')
      .then(res => {
        setLogin(res.data.login)
      })
      .catch(err => console.log(err))
  })
  return (
    <div className='bg-black'>
      <Nav />
      <Router className="bg-white " style={{ minHeight: "" }}>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/projects' element={<Project />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/youtube-app-details' element={<YouTube />} />
          <Route exact path='/bloggin-app-details' element={<BloggingApp />} />
          <Route exact path='/movie-info-app-details' element={<MovieInfo />} />
          <Route exact path='/add' element={<Addproject />} />
          <Route exact path='/details/:name' element={<Details />} />
          <Route exact path='/auth/anirudh-kala/loginregister' element={<LoginRegister />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
