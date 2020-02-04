import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Projects from '../components/Projects'
import AboutMe from '../components/AboutMe'
const HomePage = () => {
  return (
  <>
  <nav><ul className="topNav">
      <li>
        <Link className="navLink" to="/">Projects </Link>
      </li>
      <li>
        <Link className="navLink" to="/1"> Resume </Link>
      </li>
      <li>
        <Link className="navLink" to="/2"> About </Link>
      </li>
      <li>
        <Link className="navLink" to="/2"> Contact</Link>
      </li>
    </ul></nav>
  <div className="homeTopBackground">
    
  
    <div className="titleInfo">
      <p className="name">Nathanael Swander</p>
      <p className="title">Software Developer</p>
    </div>
  </div>
  <div className="projects">
    <h1 className="projectsTitle"> - Portfolio - </h1>
    <div className="projectsTable">
      <Projects/>
    </div>
    <div className="aboutTable">
      <AboutMe/>
    </div>
  </div>

  </>
  
  
    )
}

export default HomePage
