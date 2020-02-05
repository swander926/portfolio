import React from 'react'

const Skills = () => {
  return (
    <div className="skillsBox">
      <ul className="skillsColumn">
        <li className="skillTitle">Technologies:</li>
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
        <li className="skillTitle">Professional Skills:</li>
        <div className="innerList">
        <li>Troubleshooting</li>
        <li>Project Management</li>
        <li>Strategic Planning</li>
        <li>Leadership</li>
        <li>SEO Marketing</li>
        </div>
      </ul>

      <ul className="skillsColumn">
        <li className="skillTitle">Soft Skills:</li>
        <div className="innerList extraMargin">
        <li>Bonsai enthusiast</li>
        <li>Live Music advocate</li>
        <li>Soccer player / referee</li>
        <li>Discoverer</li>
        </div>
      </ul>
    </div>
  )
}

export default Skills
