import React from 'react'

import projectdata from '../projects.json'

const Projects = () => {

  return (
    <>
    {projectdata.map(proj => {
      return (
        <div className="projBox">
            <img height="200px" width="300px" src={proj.image}/>
          <ul className="projectBox">
            <li className="projectTitle">{proj.title}</li>
            <li className="projectDescription">{proj.description}</li>
            <li>{proj.skills}</li>
            <div className="linkSeparator">
              <li><a target="_blank" className="projectLink" href={proj.gitHubLink}>Code</a></li>
              <li><a target="_blank" className="projectLink" href={proj.launch}>Live Site</a></li>
            </div>
          </ul>
        </div>
      )


    })}

    </>
  )
  
}

export default Projects