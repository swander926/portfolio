import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'
import Footer from '../components/Footer'
import Resume from '../components/Resume'


const HomePage = () => {
  return (
  <>
  <nav><ul className="topNav">
      <li>
        <a className="navLink" href="#projectTarget">Projects </a>
      </li>
      <li>
        <a target="_blank" className="navLink" href="https://drive.google.com/file/d/17EwZQptwmOkahvlxFsHlUEk2HPtlZhT4/view?usp=sharing"> Resume </a>
      </li>
      <li>
        <a className="navLink"  href="#aboutTarget"> About </a>
      </li>
      <li>
        <a className="navLink" href="#contactTarget"> Contact</a>
      </li>
    </ul></nav>
  <div className="homeTopBackground">
    
  
    <div className="titleInfo">
      <p className="name">Nathanael Swander</p>
      <p className="title">Software Developer</p>
    </div>
  </div>
  <div className="projects">
    <h1 id="projectTarget" className="projectsTitle"> - Portfolio - </h1>
    <div className="projectsTable">
      <Projects/>
    </div>
    <h1 id="projectTarget" className="projectsTitle"> - Skills - </h1>
    <div className="skillsTable">
      <Skills/>
    </div>
  </div>
    <div className="aboutTable" id="aboutTarget">
      <AboutMe/>
    </div>
    <div className="test"><Resume/></div>
    <div className="contactSection">
      <div id="contactTarget"> - Contact Me - </div>
    <div className="iconSection"></div></div>
    <div className="iconTable">
      <Footer className="test"/>
    </div>
    {/* <div>    <h5 className="">Made with ❤️ in Saint Petersburg, FL</h5>
</div> */}
    
    

  </>
  
  
    )
}

export default HomePage
