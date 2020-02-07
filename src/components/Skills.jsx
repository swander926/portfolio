import React from 'react'

const Skills = () => {
  return (
    <div className="skillsBox">
      <ul className="skillsColumn">
        <p className="skillTitle">Technological</p>
        <div className="innerList">
          <li>C#</li>
          <li>React Js</li>
          <li>.NET Core</li>
          <li>ASP.NET Core</li>
          <li>RESTful API</li>
          <li>JavaScript</li>
          <li>PostgreSQL</li>
          <li>SQL</li>
          <li>CSS</li>
          <li>Git</li>
        </div>
      </ul>

      <ul className="skillsColumn">
        <p className="skillTitle">Technical</p>
        <div className="innerList">
        <li>Troubleshooting</li>
        <li>Project Management</li>
        <li>Strategic Planning</li>
        <li>Leadership</li>
        <li>SEO Marketing</li>
        </div>
      </ul>

      <ul className="skillsColumn">
        <p className="skillTitle">Personal</p>
        <div className="innerList">
        <li>Bonsai Artist</li>
        <li>Avid Traveler</li>
        <li>Live Music Enthusiast</li>
        <li>Soccer Player / Referee</li>
        <li>Pin Designer</li>
        <li>Explorer</li>
        </div>
      </ul>
    </div>
  )
}

export default Skills
