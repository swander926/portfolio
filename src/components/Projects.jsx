import React from 'react'

import projectdata from '../projects.json'

const Projects = () => {

  return (
    <>
    {projectdata.map(proj => {
      return (
        <div className="projBox">
          <ul className="projectBox">
            <li><img height="250px" src={proj.image}/></li>
            <li>{proj.title}</li>
            <li>{proj.description}</li>
            <li>{proj.skills}</li>
            <li>{proj.gitHubLink}</li>
            <li>{proj.launch}</li>

          </ul>
        </div>
      )


    })}

    </>
  )
  
}

export default Projects