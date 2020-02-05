import React from 'react'

const Skills = () => {
  return (
    <div className="skillsBox">
      <ul className="skillsColumn">
        <p className="skillTitle">Technologies</p>
        <div className="innerList">
          <li>React Js</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>SQL</li>
          <li>PostgreSQL</li>
          <li>.NET Core</li>
          <li>ASP.NET Core</li>
          <li>C#</li>
          <li>Git</li>
          <li>RESTful API</li>
        </div>
      </ul>

      <ul className="skillsColumn">
        <p className="skillTitle">Technical Skills</p>
        <div className="innerList">
        <li>Troubleshooting</li>
        <li>Project Management</li>
        <li>Strategic Planning</li>
        <li>Leadership</li>
        <li>SEO Marketing</li>
        </div>
      </ul>

      <ul className="skillsColumn">
        <p className="skillTitle">Extra-Curricular</p>
        <div className="innerList">
        <li>Bonsai Enthusiast</li>
        <li>Live Music Advocate</li>
        <li>Soccer Player / Referee</li>
        <li>Discoverer</li>
        <li>Pin Artist</li>
        </div>
      </ul>
    </div>
  )
}

export default Skills
