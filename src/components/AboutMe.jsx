import React from 'react';
import me from '../images/me.png'

const AboutMe = () => {
  return (
    <div>
      <div className="aboutMeDiv">
      <div className="aboutHeader">- About Me -</div>
      <div className="aboutSection"><img className="meImg" height="250px"src={me}/>
        <p className="aboutMeText">I am a passionate individual with a meticulous approach to problem solving. I have a strong work ethic with a desire to improve myself and the world around me. I have a curious intellect and have spent my life pursuing knowledge. Organically drawn to technology,  I regularly attend seminars, local meetups, and volunteer events. I am confident in who I am and will not compromise my character. I want to consistently grow and become a better person. I speak up when necessary and I'm not afraid to ask questions. I gravitate towards challenges and enjoy working with others.  People consider me a well-rounded individual with a wide variety of interests. I intend to channel my passion in a work environment by bridging the gap between technologies and users.   </p>
</div>
      </div>
    </div>
  );
}

export default AboutMe;
