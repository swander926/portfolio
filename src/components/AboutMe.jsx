import React from 'react';
import me from '../images/me.png'

const AboutMe = () => {
  return (
    <div>
      <div className="aboutMeDiv">
      <div className="aboutHeader">- About Me -</div>
      <div className="aboutSection"><img className="meImg" height="500px"src={me}/>
        <p className="aboutMeText">I am a passionate individual with a meticulous approach to problem solving. I have a very strong work ethic and am constantly trying to grow and improve myself and others around me.  </p>
</div>
      </div>
    </div>
  );
}

export default AboutMe;
